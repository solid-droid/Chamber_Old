import { AfterViewInit, Component } from '@angular/core';
import { ThreejsService } from '../../services/threejs/threejs.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {
  controls:any;
  scene:any;
  camera:any;
  renderer:any;
  canvasWidth:number;
  canvasHeight:number;
  cube:any;

  constructor(
    private readonly threeJS: ThreejsService
  ) { }

  ngAfterViewInit() {
    this.threeJS.initThreeJS();
    const cube = this.threeJS.loadCube({
      showEdge: true,
    });
    this.threeJS.on(cube, 'mousemove', (e)=> { 
      console.log(e);
       });
    this.threeJS.drawGrid();
    this.threeJS.render();
  }







}
