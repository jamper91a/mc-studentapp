import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Util } from './util';
import {Answer} from './answers/Answer';
import {LoadingController} from '@ionic/angular';
import {AnswerLogin} from './answers/AnswerLogin';




@Injectable()
export class MyCentro {
    constructor(
        private api: ApiService,
        private util: Util,
        private loadingCtrl:LoadingController
    ) {
    }


    async login(body:any){
        const dialog = await this.loadingCtrl.create({message: "Ingresando"});
        await dialog.present();
        let call =this.api.post('login', body);
            call.subscribe(
                (res:AnswerLogin)=>{return res;},
                ()=>{},
                ()=>{dialog.dismiss();}
            );
        return call;
    }

}
