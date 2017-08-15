import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'groups',
})

export class GroupsPipe implements PipeTransform {
  transform(value, args:string[]) : any {
    var groups = {};

    value.forEach(function(o) {
      var group = (<string>o.transDate).split('T')[0];
      groups[group] = groups[group] ?
         groups[group] : { name: group, subItems: [] };
      groups[group].subItems.push(o);  
    });

    return Object.keys(groups).map(function (key) {return groups[key]});
  }
}