import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderMenuCenterComponent } from './header-menu-center.component';

describe('HeaderMenuCenterComponent', () => {
  let component: HeaderMenuCenterComponent;
  let fixture: ComponentFixture<HeaderMenuCenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderMenuCenterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderMenuCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
