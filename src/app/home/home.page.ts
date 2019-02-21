import {Component, OnInit} from '@angular/core';
import {User} from '../providers/POJO/User';
import {Util} from '../providers/util';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  public user:User;
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'My guides',
      url: '/guides',
      icon: 'list'
    }
  ];
  constructor(
      public util:Util
  ) { }

  ngOnInit(): void {
    this.user = JSON.parse(this.util.getPreference(this.util.constants.user));
  }


}
