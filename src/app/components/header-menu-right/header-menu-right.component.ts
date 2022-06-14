import { Component, OnInit } from '@angular/core';
import { SharedDataService } from '../../services/sharedData/shared-data.service';

@Component({
  selector: 'app-header-menu-right',
  templateUrl: './header-menu-right.component.html',
  styleUrls: ['./header-menu-right.component.scss']
})
export class HeaderMenuRightComponent implements OnInit {

  activeMenu = {
    stats: false
  }
  constructor(
    private readonly sharedData : SharedDataService
  ) { }

  ngOnInit(): void {
  }

  showMenu(menu: string) {
    this.activeMenu[menu] = !this.activeMenu[menu];
    if(this.activeMenu[menu]) {
      this.sharedData.setRightHeaderMenu_selection(menu);
    } else {
      this.sharedData.setRightHeaderMenu_selection(null);
    }
  }
}
