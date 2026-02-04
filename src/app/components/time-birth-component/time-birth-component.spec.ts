import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeBirthComponent } from './time-birth-component';

describe('TimeBirthComponent', () => {
  let component: TimeBirthComponent;
  let fixture: ComponentFixture<TimeBirthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimeBirthComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimeBirthComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
