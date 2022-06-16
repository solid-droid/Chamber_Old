import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-build',
  templateUrl: './menu-build.component.html',
  styleUrls: ['./menu-build.component.scss']
})
export class MenuBuildComponent implements OnInit {

  robotList: any[] = [
    {name:'test'},
    {name:'helloworld'},
  ]
  selectedRobot: any;
  id:any;
  partType:any;

  x:any;
  y:any;
  z:any;
  h:any;
  w:any;
  d:any;
  rotx:any;
  roty:any;
  rotz:any;

  controlOptions: any = [
    {name:'Position'},
    {name:'Rotation'},
    {name:'Scale'},
  ];
  selectedControl:any[]= [
    {name:'Position'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

  updateRobotName(){
    console.log(this.selectedRobot);
  }

}
