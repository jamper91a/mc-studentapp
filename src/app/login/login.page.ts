import { Component, OnInit } from '@angular/core';
import {MyCentro} from '../providers/mycentro';
import {AnswerLogin} from '../providers/answers/AnswerLogin';
import {Util} from '../providers/util';
import {User} from '../providers/POJO/User';
import {NavController} from '@ionic/angular';

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
      public navCtrl:NavController
  ) { }

  ngOnInit() {
      let user:User = JSON.parse(this.util.getPreference("user"));
      if(user)
          this.navCtrl.navigateRoot('home');
  }

  async login() {
      let call = await this.myCentro.login(this.account);
      call.subscribe(
          (ans:AnswerLogin)=>{
              if(ans){
                  alert("Logeado Satisfactoriamente");
                  this.util.savePreference("token", ans.data.token);
                  this.util.savePreference("user", JSON.stringify(ans.data.user));
                  this.navCtrl.navigateRoot('home');
              }else{
                  alert("Incovenientes al logear");
              }
          },
          ()=>{}
      );

  }

}
