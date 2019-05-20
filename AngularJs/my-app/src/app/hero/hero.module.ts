import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero.component'
import { HeroService } from './hero.service';

@NgModule({
  declarations: [
    HeroComponent
  ],
  exports: [
    HeroComponent
  ],
  providers: [
    HeroService
  ],
  imports: [
    CommonModule
  ]
})
export class HeroModule {}
