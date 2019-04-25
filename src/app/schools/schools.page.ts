import { Component, OnInit } from '@angular/core';
import {School} from '../providers/POJO/School';
import {MyCentro} from '../providers/mycentro';
import {Util} from '../providers/util';
import {AnswerGetSchools} from '../providers/answers/AnswerGetSchools';

@Component({
  selector: 'app-schools',
  templateUrl: './schools.page.html',
  styleUrls: ['./schools.page.scss'],
})
export class SchoolsPage implements OnInit {
    public schools: School[];
  constructor(
      public myCentro: MyCentro,
      public util:Util
  ) { }

  ngOnInit() {
      this.getSchools()
  }

  async getSchools() {
    let call = await this.myCentro.getSchools();
    call.subscribe(
        (ans:AnswerGetSchools)=>{
          if(ans){
            this.schools= ans.data;
          }else{
            this.util.show_toast("Issues trying to get the schools");
          }
        },
        ()=>{
          this.util.show_toast("General error");
        }
    );

  }

}
