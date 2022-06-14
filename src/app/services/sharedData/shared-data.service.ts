import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  activeLeftMenu={
    workspace:false,
    build:true,
    graph:false,
    connect:false,
    extensions:false,
  };

  constructor() { }

  private readonly obs_leftHeaderMenu_selected: BehaviorSubject<string> = new BehaviorSubject<string>('build');
  getLeftHeaderMenu_selection = this.obs_leftHeaderMenu_selected.asObservable();

  setLeftHeaderMenu_selection(value: string) {
    this.obs_leftHeaderMenu_selected.next(value);
  }

  private readonly obs_rightHeaderMenu_selected: BehaviorSubject<string> = new BehaviorSubject<string>(null);
  getRightHeaderMenu_selection = this.obs_rightHeaderMenu_selected.asObservable();

  setRightHeaderMenu_selection(value: string) {
    this.obs_rightHeaderMenu_selected.next(value);
  }


}
