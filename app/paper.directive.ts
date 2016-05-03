import {Directive, ElementRef, Input} from '@angular/core';

@Directive({
    selector: '[mdl-paper]',
    inputs:['bar']


})
export class PaperDirective {
  constructor(el: ElementRef) {
       el.nativeElement.cssClass = 'mdl-shadow--5dp"';
        //el.nativeElement.style.backgroundColor = 'yellow';
     }

}
