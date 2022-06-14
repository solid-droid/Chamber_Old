import { Component, OnInit } from '@angular/core';
import { SharedDataService } from '../../services/sharedData/shared-data.service';

@Component({
  selector: 'app-header-menu-left',
  templateUrl: './header-menu-left.component.html',
  styleUrls: ['./header-menu-left.component.scss']
})
export class HeaderMenuLeftComponent implements OnInit {

  constructor(
    public readonly sharedData: SharedDataService
  ) { }

  ngOnInit(): void {
  }

  showMenu(menu:string){
    const currentState = this.sharedData.activeLeftMenu[menu];
    for(let key in this.sharedData.activeLeftMenu){
      this.sharedData.activeLeftMenu[key] = false;
    }
    this.sharedData.activeLeftMenu[menu] = !currentState;
    if(!this.sharedData.activeLeftMenu[menu]){
      this.sharedData.setLeftHeaderMenu_selection(null);
    } else {
      this.sharedData.setLeftHeaderMenu_selection(menu);
    }
  }

}
