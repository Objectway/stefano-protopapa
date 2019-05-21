import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { HeroDetailsComponent} from './hero-details/hero-details.component'
import { AppHighlightDirective } from './app-highlight.directive';
import { HeroService } from './hero/hero.service';

@NgModule({
  declarations: [
    AppHighlightDirective,
    AppComponent,
    HeroComponent,
    HeroDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    HeroService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
