import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroService } from './hero.service';

@NgModule({
  declarations: [
  ],
  exports: [
  ],
  providers: [
    HeroService
  ],
  imports: [
    CommonModule
  ]
})
export class HeroModule {}
