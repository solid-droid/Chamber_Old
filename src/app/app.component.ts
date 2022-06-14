import { Component, OnInit } from '@angular/core';
import { ElectronService } from './core/services';
import { SharedDataService } from './services/sharedData/shared-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  showLeftMenu = false;
  showRightMenu = false;
  constructor(
    private electronService: ElectronService,
    private sharedData: SharedDataService
  ) { }

  ngOnInit() {
    this.sharedData.getLeftHeaderMenu_selection.subscribe((menu:string) =>{
      this.showLeftMenu = menu ? true : false;
    });
    this.sharedData.getRightHeaderMenu_selection.subscribe((menu:string) =>{
      this.showRightMenu = menu ? true : false;
    });
  }

  closeApp() {
    this.electronService.ipcRenderer.send('closeApp');
  }

  minimiseApp(){
    this.electronService.ipcRenderer.send('minimiseApp');
  }

  maximiseApp(){
    this.electronService.ipcRenderer.send('maximiseApp');
  }
}
