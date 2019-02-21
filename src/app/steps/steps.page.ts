import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Util} from '../providers/util';
import {MyCentro} from '../providers/mycentro';
import {AnswerGetGuideById} from '../providers/answers/AnswerGetGuideById';
import {Step} from '../providers/POJO/Step';
import {NavController} from '@ionic/angular';

@Component({
    selector: 'app-steps',
    templateUrl: './steps.page.html',
    styleUrls: ['./steps.page.scss'],
})
export class StepsPage implements OnInit {

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

    public steps: Step[];
    public idguide: number;
    public nameguide: string;
    public stepNumber: number;

    constructor(
        private route: ActivatedRoute,
        public myCentro: MyCentro,
        public util: Util,
        public navCtrl: NavController
    ) {
    }

    getIcon() {
        return this.icons[1];
    }

    async getGuide() {
        let call = await this.myCentro.getGuideById(this.idguide);
        call.subscribe(
            (ans: AnswerGetGuideById) => {
                if (ans) {
                    this.steps = ans.data.steps;
                    this.nameguide = ans.data.name;
                } else {
                    this.util.show_toast('Error getting the guide');
                }
            },
            () => {
                this.util.show_toast('General error');
            }
        );

    }


    ngOnInit() {

    }

    ionViewWillEnter() {
        this.idguide = parseInt(this.route.snapshot.paramMap.get('idguide'));
        this.stepNumber = parseInt(this.route.snapshot.paramMap.get('stepNumber'));
        this.getGuide();
    }

}
