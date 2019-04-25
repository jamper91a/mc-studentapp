import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Util } from './util';
import {GuidesUser} from './POJO/GuidesUser';
import {Answer} from './answers/Answer';
import {LoadingController} from '@ionic/angular';

@Injectable()
export class GuidesProvider {
    constructor(
        private api: ApiService,
        private util: Util,
        private loadingCtrl:LoadingController
    ) {
    }

    async getGuides(body:any){
        const dialog = await this.loadingCtrl.create({message: "invoking method: getSchools"});
        await dialog.present();
        let call = this.api.get('studentsHasGuides', body);

        call.subscribe(
            (res:Answer)=>{return res;},
            ()=>{},
            ()=>{dialog.dismiss();}
        );
        return call;
    }

}
