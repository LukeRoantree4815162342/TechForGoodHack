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
      case 0:
        return 'GCSE';
      case 1:
        return 'A-Level';
      case 2:
        return 'HND'
      case 3:
        return 'Degreee';
      case 4:
        return 'Masters/Phd'
      default:
        return 'None';
    }

  }
}
