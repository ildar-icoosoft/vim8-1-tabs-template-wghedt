import {Directive, TemplateRef} from '@angular/core';

@Directive({
  selector: '[lazyTabContent]'
})
export class LazyTabContentDirective {

  constructor(public template: TemplateRef<any>) { }

}
