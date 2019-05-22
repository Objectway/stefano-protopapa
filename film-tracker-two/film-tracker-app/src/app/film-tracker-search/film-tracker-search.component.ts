import { Component, OnInit } from '@angular/core';
import { FilmTrackerService } from '../service/film-tracker.service';
import { FilmResponse } from '../model/film-response'
import { Film } from '../model/film'

@Component({
  selector: 'app-film-tracker-search',
  templateUrl: './film-tracker-search.component.html',
  styleUrls: ['./film-tracker-search.component.scss']
})
export class FilmTrackerSearchComponent implements OnInit {

  strSearch: string;
  filmList: Film[]

  constructor(private filmTrackerService: FilmTrackerService) { }

  ngOnInit() {
  }

  searchFilm(){
    this.filmTrackerService.getFilmList(this.strSearch).subscribe(
      (response: FilmResponse) => {
        this.filmList = response.Search
        console.log(this.filmList)
      }
    )
  }
  /*
  addFilmToWatchedFilm(film: Film){
    this.filmTrackerService.addFilmToWatchedList(film);
  }
  addFilmToWishList(film: Film){
    this.filmTrackerService.addFilmToWishList(film);
  }

  goToDetails(imdbID){}
  */

}
