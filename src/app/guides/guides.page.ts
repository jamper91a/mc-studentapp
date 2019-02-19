import { Component, OnInit } from '@angular/core';
import {Util} from '../providers/util';
import {MyCentro} from '../providers/mycentro';
import {AnswerGetGuidesByUserId} from '../providers/answers/AnswerGetGuidesByUserId';
import {User} from '../providers/POJO/User';
import {StudentsHasGuides} from '../providers/POJO/StudentsHasGuides';
import {Guide} from '../providers/POJO/Guide';
import {NavController} from '@ionic/angular';
import {StepsPage} from '../steps/steps.page';
@Component({
  selector: 'app-guides',
  templateUrl: './guides.page.html',
  styleUrls: ['./guides.page.scss'],
})
export class GuidesPage implements OnInit {

  private selectedItem: any;
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
      public util:Util,
      public navCtrl:NavController
  ) {

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
                    alert("Incovenientes al obtener las guias");
                }
            },
            ()=>{
                alert("Error general");
            }
        );

    }

  // async getGuides() {
  //
  //     let call = await this.guidesProvider.getGuides(this.util.getPreference("user").id);
  //     var obj = {}
  //     call.subscribe(
  //         (ans:Answer)=>{
  //             if(ans){
  //               for (var i=0; i<ans.data.length; i++) {
  //                 console.log(ans.data[i]);
  //                 ans.data[i].title = ans.data[i].guides_id.name;
  //                 ans.data[i].id = ans.data[i].guides_id.id;
  //                 this.items.push(ans.data[i]);
  //               }
  //             }else{
  //                 alert("Error invocando el servicio getGuides");
  //             }
  //         },
  //         ()=>{}
  //     );
  //             console.log(call)
  //
  // }


}
