import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuConnectComponent } from './menu-connect.component';

describe('MenuConnectComponent', () => {
  let component: MenuConnectComponent;
  let fixture: ComponentFixture<MenuConnectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuConnectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuConnectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
