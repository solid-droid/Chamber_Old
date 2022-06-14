import { Injectable } from '@angular/core';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { TransformControls } from 'three/examples/jsm/controls/TransformControls.js';
declare const THREEx:any;

@Injectable({
  providedIn: 'root'
})
export class ThreejsService {

  cameraControls:any;
  targetControls:any;
  scene:any;
  camera:any;
  renderer:any;
  canvasWidth:number;
  canvasHeight:number;
  domEvents:any;
  renderRequested:boolean = false;

  constructor() { }

  initThreeJS() {
    this.scene = new THREE.Scene();
    this.scene.fog = new THREE.Fog('rgb(36, 36, 36)', 10, 100);
    const canvas = document.getElementById('homeCanvas') as HTMLInputElement | null;
    this.canvasWidth = canvas.getBoundingClientRect().width 
    this.canvasHeight = canvas.getBoundingClientRect().height;
    
    this.camera = new THREE.PerspectiveCamera( 50, this.canvasWidth / this.canvasHeight, 0.1, 1000 );
    this.renderer = new THREE.WebGLRenderer({canvas:canvas, antialias: true, alpha:true});
    this.renderer.setSize(this.canvasWidth, this.canvasHeight);
    this.renderer.setClearColor('rgb(36, 36, 36)', 1);
    this.domEvents	= new THREEx.DomEvents(this.camera, canvas, THREE);
    this.camera.position.z = 8;
    this.camera.position.y = 3;

    this.cameraControls = new OrbitControls(this.camera, canvas);
    this.cameraControls.target.set(0, 0, 0);
    this.cameraControls.update();
    const _this = this;
    this.cameraControls.addEventListener('change', ()=> this.requestRenderIfNotRequested(_this));

    this.targetControls = new TransformControls( this.camera, this.renderer.domElement );
    this.targetControls.addEventListener( 'change', ()=> this.requestRenderIfNotRequested(_this) );
   
    this.targetControls.addEventListener( 'dragging-changed', ( event ) => {

      _this.cameraControls.enabled = ! event.value;

    } );



    window.addEventListener('resize', ()=>this.windowResize(this), false);
  }

  drawGrid(){
    const size = 100;
    const divisions = 100;

    const gridHelper = new THREE.GridHelper( size, divisions );
    this.scene.add( gridHelper );
  }
  requestRenderIfNotRequested(_this) {
    if (!_this.renderRequested) {
      _this.renderRequested = true;
      requestAnimationFrame(()=>_this.render());
    }
  }

  windowResize(_this){
    const container = document.getElementById('homeCanvasContainer') as HTMLInputElement | null;
    _this.canvasWidth = container.getBoundingClientRect().width 
    _this.canvasHeight = container.getBoundingClientRect().height;
    _this.camera.aspect = _this.canvasWidth / _this.canvasHeight;
    _this.camera.updateProjectionMatrix();
    _this.renderer.setSize(_this.canvasWidth, _this.canvasHeight);
  }

  loadCube({
    showEdge = false,
    edgeColor = 'rgb(0, 0, 0)',
  }) {
    const geometry = new THREE.BoxGeometry( 1, 1, 1 );
    const material = new THREE.MeshBasicMaterial( { color:  '#b32d00' } );
    const cube = new THREE.Mesh( geometry, material );
    this.scene.add( cube );
    this.targetControls.attach( cube );
    this.scene.add( this.targetControls );
    cube.position.y = 0.5;
    if(showEdge) {
      const edge = this.createEdge(geometry, edgeColor);
      cube.add(edge);
    }
    return cube;
  }

  on(element:any , event:string , callback:any) {
    this.domEvents.addEventListener(element , event, callback);
  }
  render() {
    this.cameraControls.update();
    this.renderer.render(this.scene, this.camera);
    this.renderRequested = false;
  }

  animate(){
    requestAnimationFrame(() => this.animate());
    this.render();
  }

  createEdge = (geometry:any, edgeColor:any =  0xffffff) => {
    const material = new THREE.LineBasicMaterial( { color: edgeColor, linewidth: 4 } );
    const _geometry = new THREE.EdgesGeometry(geometry);
    const wireframe = new THREE.LineSegments( _geometry, material  );
    wireframe.renderOrder = 1; // make sure wireframes are rendered 2nd
    return wireframe;
  }
}
