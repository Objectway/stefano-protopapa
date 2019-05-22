import { Component, OnInit } from '@angular/core';
import { FilmTrackerService } from '../service/film-tracker.service';
import { Film } from '../model/film'


@Component({
  selector: 'app-my-watched-list',
  templateUrl: './my-watched-list.component.html',
  styleUrls: ['./my-watched-list.component.scss']
})
export class MyWatchedListComponent implements OnInit {

  watchedList: Film[];

  constructor(private filmTrackerService: FilmTrackerService) { }

  ngOnInit() {
    this.watchedList = this.filmTrackerService.getWatchedList();
    console.log(this.watchedList)
  }

  deleteFilm(index){
    this.watchedList = this.filmTrackerService.delItemWatchedList(index);
  }

}
