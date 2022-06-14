import { Component, OnInit } from '@angular/core';
import { SharedDataService } from '../../services/sharedData/shared-data.service';

@Component({
  selector: 'app-header-menu-left',
  templateUrl: './header-menu-left.component.html',
  styleUrls: ['./header-menu-left.component.scss']
})
export class HeaderMenuLeftComponent implements OnInit {

  activeMenu={
    workspace:true,
    build:false,
    graph:false,
    connect:false,
    extensions:false,
  };

  constructor(
    private readonly sharedData: SharedDataService
  ) { }

  ngOnInit(): void {
  }

  showMenu(menu:string){
    const currentState = this.activeMenu[menu];
    for(let key in this.activeMenu){
      this.activeMenu[key] = false;
    }
    this.activeMenu[menu] = !currentState;
    if(!this.activeMenu[menu]){
      this.sharedData.setLeftHeaderMenu_selection(null);
    } else {
      this.sharedData.setLeftHeaderMenu_selection(menu);
    }
  }

}
