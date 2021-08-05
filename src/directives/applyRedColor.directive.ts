import { Directive, ElementRef, HostListener, Renderer2 } from "@angular/core";

@Directive({ 
    selector: '[productFilter]' 
})
export class ProductFilterDirective{
    constructor(private elRef: ElementRef, private renderer: Renderer2) {
    }


    @HostListener('click') 
    performTask() {
      
    }
}