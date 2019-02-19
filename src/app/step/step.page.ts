import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {MyCentro} from '../providers/mycentro';
import {AnswerLogin} from '../providers/answers/AnswerLogin';
import {AnswerGetGuideById} from '../providers/answers/AnswerGetGuideById';
import {AnswerGetStep} from '../providers/answers/AnswerGetStep';
import {Step} from '../providers/POJO/Step';

@Component({
  selector: 'app-step',
  templateUrl: './step.page.html',
  styleUrls: ['./step.page.scss'],
})
export class StepPage implements OnInit {

  constructor(
      private route: ActivatedRoute,
      private myCentro:MyCentro
  ) {}

  public stepId: number;
  public step: Step;

  back(){
    //this.router.navigateByUrl('/steps/:1');
  }

  ngOnInit() {
    this.stepId = parseInt(this.route.snapshot.paramMap.get('stepId'));
    this.getGuide();
  }



  async getGuide() {
        let call = await this.myCentro.getStep(this.stepId);
        call.subscribe(
            (ans:AnswerGetStep)=>{
                if(ans){
                    this.step= ans.data;
                }else{
                    alert("Incovenientes al obtener la guia");
                }
            },
            ()=>{
                alert("Error general");
            }
        );

  }

  async finishStep(){
      let call = await this.myCentro.finishStep(this.step.number,this.step.guides_id.id);
      call.subscribe(
          (ans:AnswerLogin)=>{
              if(ans){
                  alert("Paso finalizado con exito");
              }else{
                  alert("Incovenientes al finalizar paso");
              }
          },
          ()=>{}
      );
  }

}
