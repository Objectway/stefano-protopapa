import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getHero(){
    return new Observable((observer) => {
      observer.next([{
        id: 24,
        name: 'franco'
      },
      {
        id: 43,
        name: 'luca'
      }]);
      observer.complete();
    })
  }
}
