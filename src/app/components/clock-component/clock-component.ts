import { Component, input } from '@angular/core';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-clock-component',
  imports: [DatePipe],
  templateUrl: './clock-component.html',
  styleUrl: './clock-component.scss',
})
export class ClockComponent {
    
  time = input<Date>()
}
