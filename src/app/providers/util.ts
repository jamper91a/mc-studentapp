import {ToastController, LoadingController} from '@ionic/angular';
import { Injectable } from '@angular/core';


/**
 * Created by Usuario on 02/06/2017.
 */
@Injectable()
export class Util{

    public constants;
    public url:string;
    public version:string;
    constructor(
        public toastCtrl: ToastController,
        public loadingCtrl: LoadingController,

    ) {
        this.constants = {
            logged: 'logged',
            tutorial: 'tutorial',
            user: 'user',
            token: 'token',
            latitude: 'latitude',
            longitude: 'longitude',
            type_find_promotio: 'type_find_promotio',
            find_promotio_by_location: 'find_promotio_by_location',
            find_promotion_by_category: 'find_promotion_by_category',
            category_name: 'category_name',
            city_name: 'city_name',
            address: 'address',
            subcategory_id: 'subcategory_id',
            subcategory_name: 'subcategory_name',
            offer_id: 'offer_id',
            branch_id: 'branch_id',
            offers_user: 'offers_user',
            offer: 'offer',
            kind_map:'kind_map',
            map_offer:'map_offer',
            map_branch:'map_branch',
            branch: 'branch',
            company: 'company',
            country_code: 'country_code',
            country_name: 'country_name',
            find_promotion_by_user_id: 'find_promotion_by_user_id',
            find_promotion_by_subcategory_name: 'find_promotion_by_subcategory_name',
            language: 'language',
            push_code: 'push_code',
            topics: 'topics',
            company_name: 'company_name',
            get_location_first_time: 'get_location_first_time',
            logs: 'logs',
            find_business: 'find_business',
            find_exporters: 'find_exporters',
            find_agro: 'find_agro',
            find_touristic: 'find_touristic',
            exporter: 'exporter'
        };
        this.url = "http://localhost:1337/";
        this.version = "2.7.5";
    }



    public savePreference(key:string, value:any)
    {
        localStorage.setItem(key, value);
    }
    public getPreference(key):any
    {
        return localStorage.getItem(key);
    }

    public clearAllData(){
        let push_code= this.getPreference(this.constants.push_code);
        localStorage.clear();
        this.savePreference(this.constants.push_code, push_code);
    }

    public async show_toast(message1:string, position1?:string){


        if(!position1)
            position1='bottom';
        const toast =  await this.toastCtrl.create({
            message: message1,
            duration: 3000,
            position: 'bottom'
        });
        return await toast.present();

    }

    public async show_dialog(message:string){
        const loading = await this.loadingCtrl.create({
            message: message
        });
        return await loading.present();

    }
    public isUrlValid(userInput:string) {
        if(userInput!=null){
            var res = userInput.match(/http(s)?:\/\/.?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
            if(res == null)
                return false;
            else
                return true;
        }else{
            return false;
        }

    }

    public setLogs(msn:string){
        let logs = this.getPreference(this.constants.logs);
        if(logs)
            logs = logs+"\n"+msn+";";
        else
            logs = msn+";";
        this.savePreference(this.constants.logs, logs);
    }

    public clearLogs(){
        this.savePreference(this.constants.logs, "");
    }

    public getLogs(){
        return this.getPreference(this.constants.logs);
    }
}
