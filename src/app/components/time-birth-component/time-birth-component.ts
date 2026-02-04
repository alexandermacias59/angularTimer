import { Component, computed, inject } from '@angular/core';
import { TimeService } from '../../services/time-service';

@Component({
  selector: 'app-time-birth-component',
  imports: [],
  templateUrl: './time-birth-component.html',
  styleUrl: './time-birth-component.scss',
})
export class TimeBirthComponent {

  timeService = inject(TimeService);

  secondsToBirth = computed(() => {
    // Data del compleanno: 27 agosto 2026 alle 00:00
    const birthDate = new Date(2026, 7, 27, 0, 0, 0, 0); // month è 0-indexed, quindi 7 = agosto
    
    const birthDateInSeconds = Math.round(birthDate.getTime() / 1000);
    const timeInSeconds = Math.round(this.timeService.time().getTime() / 1000);

    const secondsLeft = birthDateInSeconds - timeInSeconds;

    return secondsLeft > 0 ? secondsLeft : 0;
  });

  timeToDisplay = computed(() => {
    const newTime = this.secondsToBirth() / this.timeService.timestep();
    const to1decimal = Math.round(newTime * 10) / 10;
    return to1decimal;
  });

}
