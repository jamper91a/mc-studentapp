import { Component } from '@angular/core';

import {NavController, Platform} from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {User} from './providers/POJO/User';
import {Util} from './providers/util';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'My guides',
      url: '/guides',
      icon: 'list'
    },
    {
      title: 'School',
      url: '/schools',
      icon: 'school'
    }
  ];

  public user:User= new User();


  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public navCtrl:NavController,
    public util:Util,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.user = JSON.parse(this.util.getPreference(this.util.constants.user));
      if(!this.user)
        this.navCtrl.navigateRoot('login');

    });
  }

  public logOut(){
    this.util.clearAllData();
    this.navCtrl.navigateRoot('login');
  }
}
