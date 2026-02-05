import { computed, Injectable, signal, WritableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TimeService {

  time: WritableSignal<Date> = signal(new Date());
  timestep: WritableSignal<number> = signal(1);

  timeUnit = computed(() => {
    const step = this.timestep();
    if (step === 1) return 'secondi';
    if (step === 60) return 'minuti';
    if (step === 3600) return 'ore';
    if (step === 86400) return 'giorni';
    if (step === 2592000) return 'mesi';
    if (step === 31536000) return 'anni';
    return 'secondi';
  });

  secondsToMidnight = computed(() => {

    const todayAtMidnight = new Date();
    todayAtMidnight.setHours(24,0,0,0);

    const todayAtMidnightInSeconds = Math.round( todayAtMidnight.getTime() / 1000 ) ;

    const timeInSeconds = Math.round(this.time().getTime() / 1000);

    const secondsleft = todayAtMidnightInSeconds - timeInSeconds;

    return secondsleft;
  });

  secondsToWeekend = computed(() => {

    const dayOfTheWeek = this.time().getDay();
    const hours = this.time().getHours();

    const isFridayPast18 = dayOfTheWeek === 5 && hours >= 18;
    const isSat = dayOfTheWeek === 6;
    const isSun = dayOfTheWeek === 0;
    const isWeekend = isFridayPast18 || isSat || isSun;

    if (isWeekend) {
      return 0
    }
    
    const dayToFriday = 5 - dayOfTheWeek;

    const nextFridayAt18 = new Date();
    nextFridayAt18.setDate(nextFridayAt18.getDate() + dayToFriday);
    nextFridayAt18.setHours(18,0,0,0);

    
    const nextFridayAt18InSeconds = Math.round(nextFridayAt18.getTime() / 1000)
    const timeInSeconds = Math.round(this.time().getTime() / 1000);

    return nextFridayAt18InSeconds - timeInSeconds;

  });

  secondsToEndOfTheMonth = computed(() => {
    
    const actualMonth = this.time().getMonth();
    //const nextMonth = (actualMonth + 1) % 12;
    let nextMonth = actualMonth + 1;
    if (nextMonth >= 12) {
      nextMonth = 0;  
    }

    const firstDayOfNextMonthAt0 = new Date();
    firstDayOfNextMonthAt0.setMonth(nextMonth);
    firstDayOfNextMonthAt0.setDate(1);
    firstDayOfNextMonthAt0.setHours(0,0,0,0);

    const firstDayOfNextMonthAt0InSeconds = Math.round(firstDayOfNextMonthAt0.getTime() / 1000)
    const timeInSeconds = Math.round(this.time().getTime() / 1000);

    return firstDayOfNextMonthAt0InSeconds - timeInSeconds;

    

  })

  secondsToEndOfTheYear = computed(() => {

    const actualYear = this.time().getFullYear();
    const nextYear = actualYear + 1;

    // create the date of the first day of the next year at 00
    const firstDayOfTheNextYearAt0 = new Date();
    firstDayOfTheNextYearAt0.setFullYear(nextYear);
    firstDayOfTheNextYearAt0.setMonth(0);
    firstDayOfTheNextYearAt0.setDate(1);
    firstDayOfTheNextYearAt0.setHours(0,0,0,0);

    const firstDayOfTheNextYearAt0InSeconds = Math.round(firstDayOfTheNextYearAt0.getTime() / 1000)
    const timeInSeconds = Math.round(this.time().getTime() / 1000);

    return firstDayOfTheNextYearAt0InSeconds - timeInSeconds;

  })

  constructor(){

    setInterval(() => {

      this.time.set(new Date());

      // this.time.update(oldTime => {
      //   console.log(oldTime);
      //   oldTime.setSeconds(oldTime.getSeconds() + 1);
      //   console.log(oldTime);
      //   return new Date(oldTime);
      // });

    }, 1000);

  }

  changeTimeStep(step: number) {
    this.timestep.set(step);
  }
  
}
