import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FilmTrackerSearchComponent } from './film-tracker-search/film-tracker-search.component';
import { FilmDetailsComponent } from './film-details/film-details.component'
import { MyWatchedListComponent } from './my-watched-list/my-watched-list.component'
import { MyWishListComponent } from './my-wish-list/my-wish-list.component'
import { FilmDetailsResolverService } from './service/film-details-resolver.service'

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: FilmTrackerSearchComponent
  },
  {
    path:'details/:filmId',
    component: FilmDetailsComponent,
    resolve: {
      filmDetails: FilmDetailsResolverService
    }
  },
  {
    path:'watch-list',
    component: MyWatchedListComponent
  },
  {
    path:'wish-list',
    component: MyWishListComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
