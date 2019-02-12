import { Component, OnInit } from '@angular/core';

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
  constructor() {

      this.items.push({
        id: '1',
        title: 'First Week',
        note: 'First Week',
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });

  }

  buttonClick(event) {
    console.log('Evento guide!');

  }

  ngOnInit() {
  }

}
