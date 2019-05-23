import { Pipe, PipeTransform } from '@angular/core';
import { Film } from '../model/film'

@Pipe({
  name: 'filmYear'
})
export class FilmYearPipe implements PipeTransform {

  transform(film: Film, filmYear: number): boolean {
    debugger;
    return Number(film.year) > filmYear;
  }

}
