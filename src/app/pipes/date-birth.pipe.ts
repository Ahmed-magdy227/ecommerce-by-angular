import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateBirth'
})
export class DateBirthPipe implements PipeTransform {

//   transform(value: string): string{
// let p1=value.slice(0,4)
// let p2=value.slice(4,8)
// let p3=value.slice(8,12)
// let p4=value.slice(12,16)

// let retued="your number"+ p1+"-"+p2+"-"+p3+"-"+p4;

//     return retued
//   }

// }

  transform(value: string): string{
let p1=value.slice(1,3)
let p2=value.slice(3,5)
let p3=value.slice(5,7)

let retued="your date of birth is 19"+ p1+"/"+p2+"/"+p3;

    return retued
  }

}






























// export class DateBirthPipe implements PipeTransform {

//   transform(value: string[],): any{
//     return " your date of birth is 19"+  value.slice(1,7).join();
//   }

// }

