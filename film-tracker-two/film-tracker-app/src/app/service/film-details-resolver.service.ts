import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router'
import { FilmTrackerService } from './film-tracker.service'
import { Film } from '../model/film'
 
@Injectable({
  providedIn: 'root'
})
export class FilmDetailsResolverService implements Resolve<any>{

  constructor( private filmTrackerService: FilmTrackerService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Film>{
    const filmId = route.params.filmId;
    return this.filmTrackerService.getFilmDetails(filmId);
  }
}
