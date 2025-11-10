import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.show') isOpen = false;

  constructor(private elRef: ElementRef) {}

  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
    const menu = this.elRef.nativeElement.querySelector('.dropdown-menu');
    if (this.isOpen) {
      menu?.classList.add('show');
    } else {
      menu?.classList.remove('show');
    }
  }
}
