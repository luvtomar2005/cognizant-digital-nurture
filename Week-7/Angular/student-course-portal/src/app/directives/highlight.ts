import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {

  constructor(
    private element: ElementRef,
    private renderer: Renderer2
  ) {
    this.renderer.setStyle(
      this.element.nativeElement,
      'background-color',
      '#fff8dc'
    );
  }

}