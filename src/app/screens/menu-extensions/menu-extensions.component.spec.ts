import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuExtensionsComponent } from './menu-extensions.component';

describe('MenuExtensionsComponent', () => {
  let component: MenuExtensionsComponent;
  let fixture: ComponentFixture<MenuExtensionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuExtensionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuExtensionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
