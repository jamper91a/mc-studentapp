import { Component, OnInit } from '@angular/core';
import {MyCentro} from '../providers/mycentro';
import {Util} from '../providers/util';
import {ActivatedRoute} from '@angular/router';
import {NavController} from '@ionic/angular';
import {School} from '../providers/POJO/School';
import {AnswerGetSchool} from '../providers/answers/AnswerGetSchool';
@Component({
  selector: 'app-school',
  templateUrl: './school.page.html',
  styleUrls: ['./school.page.scss'],
})
export class SchoolPage implements OnInit {

  public schoolId: number;
  public school: School = null;

  constructor(
      private route: ActivatedRoute,
      private myCentro: MyCentro,
      public util: Util,
      public navCtrl: NavController,
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.schoolId = parseInt(this.route.snapshot.paramMap.get('schoolId'));
    this.getSchool();
  }


  async getSchool() {
    let call = await this.myCentro.getSchool(this.schoolId);
    call.subscribe(
        (ans:AnswerGetSchool)=>{
          if(ans){
            this.school= ans.data;

          }else{
            this.util.show_toast("Issues trying to get the school");
          }
        },
        ()=>{
          this.util.show_toast("General error");
        }
    );

  }

}
