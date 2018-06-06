import { Pipe, PipeTransform } from '@angular/core';
import { find, result } from 'lodash'

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any[], args?: string): any[] {
    return value.filter(item => {
       // return find(value, ['name', args[0].toLowerCase()])
       if (args === '') {
        return value;
       } else {
        return item.name.toLowerCase() === args.toLowerCase() ? item : undefined
       }
    });
  }

}
