import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-menu-center',
  templateUrl: './header-menu-center.component.html',
  styleUrls: ['./header-menu-center.component.scss']
})
export class HeaderMenuCenterComponent implements OnInit {

  searchText: string = '';
  searchMode = true;
  constructor() { }

  ngOnInit(): void {
  }

  modeChange(){
    this.searchMode = !this.searchMode;
  }

}
