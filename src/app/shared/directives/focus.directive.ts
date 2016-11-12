import { Directive, Renderer, ElementRef, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[surveyFocus]',
  inputs: ['surveyFocus']
})
export class FocusDirective implements AfterViewInit{

  constructor(public renderer: Renderer, public elementRef: ElementRef) { }

  ngAfterViewInit() {
    this.renderer.invokeElementMethod(
      this.elementRef.nativeElement, 'focus', []);
  }
}
