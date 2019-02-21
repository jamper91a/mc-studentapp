import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MyCentro} from '../providers/mycentro';
import {AnswerLogin} from '../providers/answers/AnswerLogin';
import {AnswerGetStep} from '../providers/answers/AnswerGetStep';
import {Step} from '../providers/POJO/Step';
import {Util} from '../providers/util';
import {NavController} from '@ionic/angular';

@Component({
    selector: 'app-step',
    templateUrl: './step.page.html',
    styleUrls: ['./step.page.scss'],
})
export class StepPage implements OnInit {
    public stepId: number;
    public step: Step;

    constructor(
        private route: ActivatedRoute,
        private myCentro: MyCentro,
        public util: Util,
        public navCtrl: NavController,
    ) {
        this.step = new Step();
    }
    ngOnInit() {

    }

    ionViewWillEnter() {

        this.stepId = parseInt(this.route.snapshot.paramMap.get('stepId'));
        this.getStep();
    }


    async getStep() {
        let call = await this.myCentro.getStep(this.stepId);
        call.subscribe(
            (ans: AnswerGetStep) => {
                if (ans) {
                    this.step = ans.data;
                } else {
                    this.util.show_toast('Error getting the step');
                }
            },
            () => {
                this.util.show_toast('General Error');
            }
        );

    }

    async finishStep() {
        let call = await this.myCentro.finishStep(this.step.number, this.step.guides_id.id);
        call.subscribe(
            (ans: AnswerLogin) => {
                if (ans) {
                    this.util.show_toast('Step finish successfully');
                    this.navCtrl.navigateBack(
                        `steps/${this.step.guides_id.id}/${this.step.number+1}`);
                } else {
                    this.util.show_toast('Error finishing the step');
                }
            },
            () => {
            }
        );
    }

}
