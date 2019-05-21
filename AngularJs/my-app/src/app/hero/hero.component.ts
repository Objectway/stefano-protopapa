import { Component, OnInit } from '@angular/core';
import { HeroService } from './hero.service';
import { Hero } from './hero';
import { Router } from '@angular/router';


@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  private heroList: Hero[];

  constructor(private heroService: HeroService, private router: Router) { }

  goToTheDetails(heroId){
    this.router.navigate(["/", heroId])
  }
    

  ngOnInit() {
    this.heroService.getHero().subscribe((response: Hero[]) => {
      this.heroList = response;
    })
  }

}
