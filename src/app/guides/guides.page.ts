import { Component, OnInit } from '@angular/core';
import {Util} from '../providers/util';
import {MyCentro} from '../providers/mycentro';
import {AnswerGetGuidesByUserId} from '../providers/answers/AnswerGetGuidesByUserId';
import {User} from '../providers/POJO/User';
import {StudentsHasGuides} from '../providers/POJO/StudentsHasGuides';
@Component({
  selector: 'app-guides',
  templateUrl: './guides.page.html',
  styleUrls: ['./guides.page.scss'],
})
export class GuidesPage implements OnInit {

  private icons = [
    'flask',
    'wifi',
    'beer',
    'football',
    'basketball',
    'paper-plane',
    'american-football',
    'boat',
    'bluetooth',
    'build'
  ];

  public guides: StudentsHasGuides[];

  constructor(
      public myCentro: MyCentro,
      public util:Util) {

  }


  ngOnInit() {
    this.getGuides();
  }



    async getGuides() {
      let user:User = JSON.parse(this.util.getPreference(this.util.constants.user));
      let call = await this.myCentro.getGuidesByUserId(user.id);
        call.subscribe(
            (ans:AnswerGetGuidesByUserId)=>{
                if(ans){
                    this.guides= ans.data;
                }else{
                    this.util.show_toast("Issues trying to het the guides");
                }
            },
            ()=>{
                this.util.show_toast("General error");
            }
        );

    }


}
