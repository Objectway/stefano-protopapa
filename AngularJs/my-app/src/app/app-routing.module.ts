import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { HeroDetailsComponent} from './hero-details/hero-details.component'

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: AppComponent
  },
  {
    path: 'heroes',
    component: HeroComponent,
    loadChildren: './hero/hero.module#HeroModule'
  },
  {
    path: ':id',
    component: HeroDetailsComponent
  }
]

@NgModule({
  imports:[
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
