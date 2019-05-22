import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilmTrackerSearchComponent } from './film-tracker-search/film-tracker-search.component';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { FilmTrackerButtonComponent } from './film-tracker-button/film-tracker-button.component';
import { FilmDetailsComponent } from './film-details/film-details.component';
import { MyWishListComponent } from './my-wish-list/my-wish-list.component';
import { MyWatchedListComponent } from './my-watched-list/my-watched-list.component';
import { MyMenuComponent } from './my-menu/my-menu.component'
import { FilmDetailsResolverService} from './service/film-details-resolver.service'

@NgModule({
  declarations: [
    AppComponent,
    FilmTrackerSearchComponent,
    FilmTrackerButtonComponent,
    FilmDetailsComponent,
    MyWishListComponent,
    MyWatchedListComponent,
    MyMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    FilmDetailsResolverService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
