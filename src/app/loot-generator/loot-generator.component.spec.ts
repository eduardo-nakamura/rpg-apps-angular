import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LootGeneratorComponent } from './loot-generator.component';

describe('LootGeneratorComponent', () => {
  let component: LootGeneratorComponent;
  let fixture: ComponentFixture<LootGeneratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LootGeneratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LootGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
