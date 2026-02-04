import { Component, computed, inject } from '@angular/core';
import { TimeService } from '../../services/time-service';

@Component({
  selector: 'app-time-gta6-component',
  imports: [],
  templateUrl: './time-gta6-component.html',
  styleUrl: './time-gta6-component.scss',
})
export class TimeGta6Component {

  timeService = inject(TimeService);

  secondsToGta6 = computed(() => {
    // Data di rilascio di GTA 6: 19 novembre 2026 alle 00:00
    const gta6ReleaseDate = new Date(2026, 10, 19, 0, 0, 0, 0); // month è 0-indexed, quindi 10 = novembre
    
    const gta6ReleaseDateInSeconds = Math.round(gta6ReleaseDate.getTime() / 1000);
    const timeInSeconds = Math.round(this.timeService.time().getTime() / 1000);

    const secondsLeft = gta6ReleaseDateInSeconds - timeInSeconds;

    return secondsLeft > 0 ? secondsLeft : 0;
  });

  timeToDisplay = computed(() => {
    const newTime = this.secondsToGta6() / this.timeService.timestep();
    const to1decimal = Math.round(newTime * 10) / 10;
    return to1decimal;
  });

}
