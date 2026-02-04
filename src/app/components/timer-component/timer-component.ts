import { Component, computed, inject, input } from '@angular/core';
import { TimeService } from '../../services/time-service';

@Component({
  selector: 'app-timer-component',
  imports: [],
  templateUrl: './timer-component.html',
  styleUrl: './timer-component.scss',
})
export class TimerComponent {

  timeService = inject(TimeService);

  title = input<string>()
  seconds = input.required<number>()
  
  timeToDisplay = computed(() => {
    const newTime = this.seconds() / this.timeService.timestep();

    const to1decimal = Math.round(newTime * 10) / 10;

    return to1decimal;
  })

  changeTimeStep(step: number) {
    this.timeService.changeTimeStep(step);
  }

}



