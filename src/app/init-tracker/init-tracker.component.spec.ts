import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InitTrackerComponent } from './init-tracker.component';

describe('InitTrackerComponent', () => {
  let component: InitTrackerComponent;
  let fixture: ComponentFixture<InitTrackerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InitTrackerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InitTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
