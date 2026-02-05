import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'badWordsLocal',
})
export class BadWordsLocalPipe implements PipeTransform {

  transform(value: number, ...args: string[]): string {
    
    const badWordsEnglish = ['damn', 'hell', 'bastard', 'crap', 'asshole', 'dick', 'piss'];
    const badWordItaMale = ['merdoso','maledetto','bastardo']; 
    const badWordsFemale = ['stronza', 'troia', 'puttana'];

    let selectedArray;
    if (args[0] = "it") {
      if (args[1] === "male") {
        selectedArray = badWordItaMale;
      } else if (args[1] === "female") {
        selectedArray = badWordsFemale;
      } else {
        selectedArray = badWordsEnglish;
      }
    } else {
          selectedArray = badWordsEnglish;
    }

    const index = value % 3;
    return selectedArray[index];
  }

}
