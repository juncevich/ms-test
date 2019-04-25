import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrequencyControllerComponent } from './frequency-controller.component';

describe('FrequencyControllerComponent', () => {
  let component: FrequencyControllerComponent;
  let fixture: ComponentFixture<FrequencyControllerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrequencyControllerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrequencyControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
