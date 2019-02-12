import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-step',
  templateUrl: './step.page.html',
  styleUrls: ['./step.page.scss'],
})
export class StepPage implements OnInit {

  constructor(private route: ActivatedRoute) {}

  idguide: string;
  nameguide: string;
  namestep: string;
  idstep: string;

  back(){
    //this.router.navigateByUrl('/steps/:1');
  }

  ngOnInit() {
    this.idstep = this.route.snapshot.paramMap.get('idstep');
    this.namestep = this.route.snapshot.paramMap.get('namestep');
    this.nameguide = this.route.snapshot.paramMap.get('nameguide');
    this.idguide = this.route.snapshot.paramMap.get('idguide');
  }

}
