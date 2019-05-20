import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appAppHighlight]'
})
export class AppHighlightDirective {

  constructor( private el : ElementRef) { 

    console.log("dvsadv");
    el.nativeElement.style.backgroundColor = 'yellow'
  }

}
