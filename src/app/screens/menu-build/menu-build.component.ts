import { Component, OnDestroy, OnInit } from '@angular/core';
import { ThreejsService } from '../../services/threejs/threejs.service';

@Component({
  selector: 'app-menu-build',
  templateUrl: './menu-build.component.html',
  styleUrls: ['./menu-build.component.scss']
})
export class MenuBuildComponent implements OnInit, OnDestroy {

  robotList: any[] = [
    {name:'test'},
    {name:'helloworld'},
  ]
  selectedRobot: any;
  id:any;
  partType:any;


  controlOptions: any = [
    {name:'Position' , value:'translate'},
    {name:'Rotation' , value:'rotate'},
    {name:'Scale', value:'scale'},
  ];
  selectedControl:any= {name:'Position', value:'translate'};


  constructor(
    public readonly threeJS: ThreejsService
  ) { }
  ngOnDestroy() {
    this.threeJS.targetControls.detach();
  }

  ngOnInit() {
  }

  updateRobotName(){

  }
  render(event, type, field){
    this.threeJS.selectedObject[type][field] = event.value;
    this.threeJS.render();
  }
  updateControl(){
      this.threeJS.targetControls.setMode(this.selectedControl.value);
      console.log(this.threeJS.selectedObject)
  }
}
