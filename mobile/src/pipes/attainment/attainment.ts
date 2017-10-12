import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the AttainmentPipe pipe.
 *
 * See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
 * Angular Pipes.
 */
@Pipe({
  name: 'attainment',
})
export class AttainmentPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: number, ...args) {
    switch (value) {
      case 1:
        return 'GCSE';
      case 2:
        return 'A-Level';
      case 3:
        return 'HND'
      case 4:
        return 'Degreee';
      case 5:
        return 'Masters/Phd'
      default:
        return 'None';
    }

  }
}
