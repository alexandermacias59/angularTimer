import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-timer-component',
  imports: [],
  templateUrl: './timer-component.html',
  styleUrl: './timer-component.scss',
})
export class TimerComponent {


  title = input<string>()
  seconds = input.required<number>()
  timestep = 1;
  timeToDisplay = computed(() => {
    const newTime = this.seconds() / this.timestep;

    const to1decimal = Math.round(newTime * 10) / 10;

    return to1decimal;
  })

  changeTimeStep(step: number) {
    this.timestep = step;
  }

}



