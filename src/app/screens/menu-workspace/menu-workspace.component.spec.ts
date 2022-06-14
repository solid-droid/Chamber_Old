import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuWorkspaceComponent } from './menu-workspace.component';

describe('MenuWorkspaceComponent', () => {
  let component: MenuWorkspaceComponent;
  let fixture: ComponentFixture<MenuWorkspaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuWorkspaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuWorkspaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
