import {Directive, ViewContainerRef} from '@angular/core'

@Directive({
  selector: '[ref]'
})
export class RefDirective {
  constructor(public containerRef: ViewContainerRef) {
  }
}
