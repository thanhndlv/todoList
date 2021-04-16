import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tu'
})
export class TuPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return value.toLocaleString() + " vnđ";
  }
}
