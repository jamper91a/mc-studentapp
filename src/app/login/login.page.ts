import { Component, OnInit } from '@angular/core';
import {MyCentro} from '../providers/mycentro';
import {AnswerLogin} from '../providers/answers/AnswerLogin';
import {Util} from '../providers/util';
import {User} from '../providers/POJO/User';
import {NavController} from '@ionic/angular';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public account: {
      username: string,
      password: string
  } = {
      username: 'jamper91',
      password: '12345'
  };

  constructor(
      public myCentro: MyCentro,
      public util:Util,
      public navCtrl:NavController,
      public menuCtrl: MenuController

  ) { }

    ionViewWillEnter() {

    }

  ngOnInit() {
      let user:User = JSON.parse(this.util.getPreference(this.util.constants.user));
      if(user)
          this.navCtrl.navigateRoot('home');
      else
          this.menuCtrl.enable(false);
  }

  async login() {
      let call = await this.myCentro.login(this.account);
      call.subscribe(
          (ans:AnswerLogin)=>{
              if(ans){
                  this.util.show_toast("Bievendido: " + ans.data.user.name);
                  this.util.savePreference("token", ans.data.token);
                  this.util.savePreference(this.util.constants.user, JSON.stringify(ans.data.user));
                  this.menuCtrl.enable(true);
                  this.navCtrl.navigateForward('home');
              }else{
                  alert("Incovenientes al logear");
              }
          },
          ()=>{}
      );

  }

}
