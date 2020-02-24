import {Pipe, PipeTransform} from '@angular/core';
import {ContestResult} from '../../../../models/contest-result.model';

@Pipe({
  name: 'timeout'
})
export class TimeoutPipe implements PipeTransform {

  transform(value: {rank: number, result: ContestResult}, duration: number): Promise<number> {
    const promise = new Promise<number>(resolve => {
      setTimeout(() => resolve(value.rank), duration);
    });
    return promise;
  }

}
