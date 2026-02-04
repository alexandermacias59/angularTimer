import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeGta6Component } from './time-gta6-component';

describe('TimeGta6Component', () => {
  let component: TimeGta6Component;
  let fixture: ComponentFixture<TimeGta6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimeGta6Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimeGta6Component);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
