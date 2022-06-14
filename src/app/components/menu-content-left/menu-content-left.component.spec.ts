import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuContentLeftComponent } from './menu-content-left.component';

describe('MenuContentLeftComponent', () => {
  let component: MenuContentLeftComponent;
  let fixture: ComponentFixture<MenuContentLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuContentLeftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuContentLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
