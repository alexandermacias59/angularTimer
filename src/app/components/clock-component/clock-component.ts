import { Component, input } from '@angular/core';


@Component({
  selector: 'app-clock-component',
  imports: [],
  templateUrl: './clock-component.html',
  styleUrl: './clock-component.scss',
})
export class ClockComponent {
    
  time = input<Date>()
}
