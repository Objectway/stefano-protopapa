import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FilmResponse } from '../model/film-response';
import { HttpClient } from '@angular/common/http';
import { Film } from '../model/film'

@Injectable({
  providedIn: 'root'
})


export class FilmTrackerService {

  private WATCHED_LIST = 'watchedList';
  private WISH_LIST = 'wishList';

  constructor(private httpClient: HttpClient) { }


  getFilmList(filmName): Observable<FilmResponse> { 

    const key = "51fb3d47";
    let endPoint = "http://www.omdbapi.com/?apikey=" + key
    console.log("servizio");
    return this.httpClient.get<FilmResponse>(endPoint + "&s=" + filmName);

  }

  addFilmToWatchedList(film: Film){
    this.addToList(this.WATCHED_LIST, film)
  }

  addFilmToWishList(film: Film){
    this.addToList(this.WISH_LIST, film)
  }

  private addToList(list: string, film: Film)
  {
    let filmList = [];
    const watchedList = localStorage.getItem(list);
    if(!!watchedList){
      filmList = JSON.parse(watchedList)
    }
    filmList.push(film)
    localStorage.setItem(list, JSON.stringify(filmList));
  }

  getFilmDetails(imdbId): Observable<Film>{
    const key = "51fb3d47";
    let endPoint = "http://www.omdbapi.com/?apikey=" + key
    return this.httpClient.get<Film>(endPoint + "&i=" + imdbId);
  }

  getWatchedList(){
    return JSON.parse(localStorage.getItem(this.WATCHED_LIST))
  }

  delItemWatchedList(index): Film[]{
    let xxx: Film[];
    return xxx
  }
}
