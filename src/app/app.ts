import { Component, inject, signal } from '@angular/core';
import { ClockComponent } from './components/clock-component/clock-component';
import { TimerComponent } from "./components/timer-component/timer-component";
import { TimeService } from './services/time-service';

@Component({
  selector: 'app-root',
  imports: [ClockComponent, TimerComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  timeServ = inject(TimeService);
}
