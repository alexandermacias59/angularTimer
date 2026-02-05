import { Component, computed, inject, input } from '@angular/core';
import { TimeService } from '../../services/time-service';
import { UpperCasePipe } from '@angular/common';
import { BadWordsPipe } from '../../pipes/bad-words-pipe';
import { BadWordsLocalPipe } from '../../pipes/bad-words-local-pipe';
@Component({
  selector: 'app-timer-component',
  imports: [UpperCasePipe, BadWordsPipe,BadWordsLocalPipe],
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



