import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderMenuRightComponent } from './header-menu-right.component';

describe('HeaderMenuRightComponent', () => {
  let component: HeaderMenuRightComponent;
  let fixture: ComponentFixture<HeaderMenuRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderMenuRightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderMenuRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
