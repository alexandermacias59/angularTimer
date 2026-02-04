import { Component, inject } from '@angular/core';
import { TimeService } from '../../services/time-service';

@Component({
  selector: 'app-controls-component',
  imports: [],
  templateUrl: './controls-component.html',
  styleUrl: './controls-component.scss',
})
export class ControlsComponent {

  timeService = inject(TimeService);

  changeTimeStep(step: number) {
    this.timeService.changeTimeStep(step);
  }

}
