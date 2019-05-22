import { Component, OnInit, Input } from '@angular/core';
import { FilmTrackerService } from '../service/film-tracker.service';
import { Film } from '../model/film'
import { Router } from '@angular/router';

@Component({
  selector: 'film-tracker-button',
  templateUrl: './film-tracker-button.component.html',
  styleUrls: ['./film-tracker-button.component.scss']
})
export class FilmTrackerButtonComponent implements OnInit {

  @Input() film: Film;
  @Input() filmId: any;

  constructor(private filmTrackerService: FilmTrackerService, private router: Router) { }

  ngOnInit() {
  }
  
  addFilmToWatchedFilm(){
    this.filmTrackerService.addFilmToWatchedList(this.film);
  }
  addFilmToWishList(){
    this.filmTrackerService.addFilmToWishList(this.film);
  }

  goToDetails(){
    this.router.navigate(['details', this.filmId])
  }
}
