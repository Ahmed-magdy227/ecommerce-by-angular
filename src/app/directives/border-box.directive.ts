import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[BorderBox]'
})
export class BorderBoxDirective {

  constructor( private elem:ElementRef) {
      elem.nativeElement.style.borderRadius="20%"
    }

    //method decorator
@HostListener("mouseover") mouseOverFun(){
  this.elem.nativeElement.style.boxShadow = "10px 10px 10px gray"
}
@HostListener("mouseout") mouseOutFun(){
  this.elem.nativeElement.style.boxShadow="0 0 0"
}
}
