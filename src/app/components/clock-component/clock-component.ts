import { Component, inject } from '@angular/core';
import { TimeService } from '../../services/time-service';

@Component({
  selector: 'app-clock-component',
  imports: [],
  templateUrl: './clock-component.html',
  styleUrl: './clock-component.scss',
})
export class ClockComponent {
    
  timeServ = inject(TimeService);
}
