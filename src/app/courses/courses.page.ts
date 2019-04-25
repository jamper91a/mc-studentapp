import { Component, OnInit } from '@angular/core';
import {School} from '../providers/POJO/School';
import {MyCentro} from '../providers/mycentro';
import {Util} from '../providers/util';
import {AnswerGetSchools} from '../providers/answers/AnswerGetSchools';
import {ActivatedRoute} from '@angular/router';
import {NavController} from '@ionic/angular';
import {Courses} from '../providers/POJO/Courses';
import {AnswerGetCourses} from '../providers/answers/AnswerGetCourses';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.page.html',
  styleUrls: ['./courses.page.scss'],
})
export class CoursesPage implements OnInit {

  public courses: Courses[]=null;
  constructor(
      private route: ActivatedRoute,
      private myCentro: MyCentro,
      public util: Util,
      public navCtrl: NavController,
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    let schoolId:number = parseInt(this.route.snapshot.paramMap.get('schoolId'));
    this.getCourses(schoolId);
  }

  async getCourses(schoolId:number) {
    let call = await this.myCentro.getCoursesBySchoolId(schoolId);
    call.subscribe(
        (ans:AnswerGetCourses)=>{
          if(ans){
            this.courses= ans.data;
          }else{
            this.util.show_toast("Issues trying to get the courses");
          }
        },
        ()=>{
          this.util.show_toast("General error");
        }
    );

  }

}
