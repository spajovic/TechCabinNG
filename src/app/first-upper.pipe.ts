import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstUpper'
})
export class FirstUpperPipe implements PipeTransform {

  transform(value:string){
    value.charAt(0).toUpperCase();
    return value;
  }

}
