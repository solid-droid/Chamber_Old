import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuContentRightComponent } from './menu-content-right.component';

describe('MenuContentRightComponent', () => {
  let component: MenuContentRightComponent;
  let fixture: ComponentFixture<MenuContentRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuContentRightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuContentRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
