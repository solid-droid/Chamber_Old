import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderMenuLeftComponent } from './header-menu-left.component';

describe('HeaderMenuLeftComponent', () => {
  let component: HeaderMenuLeftComponent;
  let fixture: ComponentFixture<HeaderMenuLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderMenuLeftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderMenuLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
