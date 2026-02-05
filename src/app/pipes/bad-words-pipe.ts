import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'badWordsPipe',
})
export class BadWordsPipe implements PipeTransform {

  transform(value: number): string {
    const badWords = ['cazzo', 'vaffanculo', 'troia', 'stronza', 'porco cane', 'merda', 'fottiti', 'coglione', 'bastardo', 'figa'];
    const index = value % badWords.length;
    return badWords[index];
  }

}
