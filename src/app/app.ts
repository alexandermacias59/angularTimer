import { Component, inject, signal } from '@angular/core';
import { ClockComponent } from './components/clock-component/clock-component';
import { TimerComponent } from "./components/timer-component/timer-component";
import { TimeService } from './services/time-service';
import { TimeBirthComponent } from "./components/time-birth-component/time-birth-component";
import { TimeGta6Component } from "./components/time-gta6-component/time-gta6-component";

@Component({
  selector: 'app-root',
  imports: [ClockComponent, TimerComponent, TimeBirthComponent, TimeGta6Component],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  timeServ = inject(TimeService);
}
