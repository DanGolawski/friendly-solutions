import { Pipe, PipeTransform } from '@angular/core';
import { WorkAssignment } from '../models/api-models';

@Pipe({
  name: 'multiple'
})
export class MultiplePipe implements PipeTransform {

  transform(workers: WorkAssignment[],): string {
    return workers.map(worker => worker.person_name).join(', ');
  }

}
