import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usdTegp'
})
export class UsdTegpPipe implements PipeTransform {

  transform(value: number): number {
    return value*30;
  }

}
