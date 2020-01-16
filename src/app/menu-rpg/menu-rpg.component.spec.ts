import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuRpgComponent } from './menu-rpg.component';

describe('MenuRpgComponent', () => {
  let component: MenuRpgComponent;
  let fixture: ComponentFixture<MenuRpgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuRpgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuRpgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
