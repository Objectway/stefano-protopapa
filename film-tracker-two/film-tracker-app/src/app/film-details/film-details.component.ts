import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { switchMap } from 'rxjs/operators'
import { FilmTrackerService } from '../service/film-tracker.service'
import { Film } from '../model/film'
import { Router } from '@angular/router';

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.component.html',
  styleUrls: ['./film-details.component.scss']
})
export class FilmDetailsComponent implements OnInit {

  filmDetails: Film;

  constructor( private router: ActivatedRoute, private filmTrackerService: FilmTrackerService, private router2: Router) { }

  ngOnInit() {
    
    this.router.data.subscribe((data: any) => {
      this.filmDetails = data.filmDetails;
    })
    
    /*let filmId;
    this.router.params.pipe(
        switchMap((params) => {
        filmId = params.filmId;
        return this.filmTrackerService.getFilmDetails(filmId);
      })
    ).subscribe((filmDetails: Film) =>{
      this.filmDetails = filmDetails;
    })*/
  }

  goBack(){
    this.router2.navigate([''])
  }
}
