import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'courseLevel',
  standalone: true
})
export class CourseLevelPipe implements PipeTransform {

  transform(credits: number): string {

    if (credits >= 4) {
      return 'Advanced';
    }

    return 'Basic';
  }

}