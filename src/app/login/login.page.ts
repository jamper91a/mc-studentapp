import { Component, OnInit } from '@angular/core';
import {MyCentro} from '../providers/mycentro';
import {Answer} from '../providers/answers/Answer';
import {AnswerLogin} from '../providers/answers/AnswerLogin';
import {Util} from '../providers/util';
import {User} from '../providers/POJO/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  private account: {
      username: string,
      password: string
  } = {
      username: 'jamper91',
      password: '12345'
  };

  constructor(
      public myCentro: MyCentro,
      public util:Util
  ) { }

  ngOnInit() {
      let user:User = JSON.parse(this.util.getPreference("user"));
      console.log(user);
      if(user)
          alert("Hola: "+user.name);
  }

  async login() {
      let call = await this.myCentro.login(this.account);
      call.subscribe(
          (ans:AnswerLogin)=>{
              if(ans){
                  alert("Logeado Satisfactoriamente");
                  this.util.savePreference("token", ans.data.token);
                  this.util.savePreference("user", JSON.stringify(ans.data.user));
              }else{
                  alert("Incovenientes al logear");
              }
          },
          ()=>{}
      );

  }

}
