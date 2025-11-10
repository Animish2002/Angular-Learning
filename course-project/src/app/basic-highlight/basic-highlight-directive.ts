import { Directive ,OnInit ,ElementRef, HostListener, HostBinding, } from "@angular/core";

@Directive({
    selector: '[appBasicHighlight]'
})

export class BasicHighlightDirective implements OnInit { 
    @HostBinding('style.backgroundColor') backgroundColor: string = 'trasparent';
    constructor (private elementRef: ElementRef){
    }

    ngOnInit() {
        this.backgroundColor = 'trasparent';
    }

    @HostListener('mouseenter') mouseover() {
    this.backgroundColor = 'blue';
    }
    
    @HostListener('mouseleave') mouseleave() {
    this.backgroundColor = 'transparent';
    }

}