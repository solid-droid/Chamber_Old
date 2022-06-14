import { Component, OnInit } from '@angular/core';
import { SharedDataService } from '../../services/sharedData/shared-data.service';

@Component({
  selector: 'app-menu-content-left',
  templateUrl: './menu-content-left.component.html',
  styleUrls: ['./menu-content-left.component.scss']
})
export class MenuContentLeftComponent implements OnInit {


   constructor(
    public readonly sharedData : SharedDataService
  ) { }

  ngOnInit() {
  }

}
