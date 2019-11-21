import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameHookComponent } from './game-hook.component';

describe('GameHookComponent', () => {
  let component: GameHookComponent;
  let fixture: ComponentFixture<GameHookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameHookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameHookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
