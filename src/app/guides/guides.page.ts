import { Component, OnInit } from '@angular/core';
import {GuidesProvider} from '../providers/guidesProvider';
import {Util} from '../providers/util';
import {GuidesUser} from '../providers/POJO/GuidesUser';
import {Answer} from '../providers/answers/Answer';

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

  public items: Array<{ title: string; note: string; icon: string; id: string }> = [];

  constructor(public guidesProvider: GuidesProvider, public util:Util) {

  }

  buttonClick(event) {
    console.log('Evento guide!');
  }

  ngOnInit() {
    this.getGuides();
  }



  async getGuides() {

      let call = await this.guidesProvider.getGuides(this.util.getPreference("user").id);
      var obj = {}
      call.subscribe(
          (ans:Answer)=>{
              if(ans){
                for (var i=0; i<ans.data.length; i++) {
                  console.log(ans.data[i]);
                  ans.data[i].title = ans.data[i].guides_id.name;
                  ans.data[i].id = ans.data[i].guides_id.id;
                  this.items.push(ans.data[i]);
                }
              }else{
                  alert("Error invocando el servicio getGuides");
              }
          },
          ()=>{}
      );
              console.log(call)

  }


}
