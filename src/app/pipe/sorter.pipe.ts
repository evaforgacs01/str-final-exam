import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sorter',
})
export class SorterPipe implements PipeTransform {
  transform(value: any[], column: string, order: string): any[] {
    !Array.isArray(value) || !column ? value : null;
    return value.sort(function (a, b) {
      if (typeof a[column] === 'number' && typeof b[column] === 'number') {
        if (order === 'ASC') {
          return a[column] - b[column];
        }
        return b[column] - a[column];
      } else {
        let a2 = String(a[column]).toLowerCase();
        let b2 = String(b[column]).toLowerCase();
        if (order === 'ASC') {
          return a2.localeCompare(b2);
        }
        return b2.localeCompare(a2);
      }
    });
  }
}
