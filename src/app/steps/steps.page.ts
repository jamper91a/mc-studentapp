import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-steps',
  templateUrl: './steps.page.html',
  styleUrls: ['./steps.page.scss'],
})
export class StepsPage implements OnInit {

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

  public items: Array<{ title: string; note: string; icon: string; idstep: string; isdone: boolean }> = [];

  idguide: string;
  public nameguide: string;

  constructor(private route: ActivatedRoute) {

      this.items.push(
        {
          title: 'Change money',
          note: 'This is item #',
          icon: this.icons[Math.floor(Math.random() * this.icons.length)],
          idstep: '1',
          isdone: true,
        },
        {
          title: 'Get Sim Card',
          note: 'This is item #',
          icon: this.icons[Math.floor(Math.random() * this.icons.length)],
          idstep: '1',
          isdone: false,
        },
        {
          title: 'Bank Account',
          note: 'This is item #',
          icon: this.icons[Math.floor(Math.random() * this.icons.length)],
          idstep: '1',
          isdone: false,
        },
        {
          title: 'IRD Number',
          note: 'This is item #',
          icon: this.icons[Math.floor(Math.random() * this.icons.length)],
          idstep: '1',
          isdone: false,
        },
        {
          title: 'AT Card',
          note: 'This is item #',
          icon: this.icons[Math.floor(Math.random() * this.icons.length)],
          idstep: '1',
          isdone: false,
        },
    );

  }

  ngOnInit() {
    this.idguide = this.route.snapshot.paramMap.get('idguide');
    this.nameguide = this.route.snapshot.paramMap.get('nameguide');
  }

}
