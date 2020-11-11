import {
  AfterContentInit,
  Component,
  ContentChildren,
  QueryList,
  TemplateRef,
  ViewChild
} from '@angular/core';
import {LazyTabContentDirective} from "../lazy-tab-content/lazy-tab-content.directive";

@Component({
  selector: 'tab-content',
  templateUrl: './tab-content.component.html',
})
export class TabContentComponent implements AfterContentInit {

  content: TemplateRef<any> | null = null;

  // используем @ContentChildren вместо @ContentChild, т.к. нам нужен LazyTabContentDirective на верхнем уровне.
  // если будем использовать @ContentChild и внутри вкладки будет другой блок tabs, то @ContentChild может найти LazyTabContentDirective
  // внутри вложенного tabs и тогда будет ошибка
  @ContentChildren(LazyTabContentDirective)
  private explicitContent: QueryList<LazyTabContentDirective>;

  @ViewChild(TemplateRef, {static: true})
  private implicitContent!: TemplateRef<any>;

  constructor() { }

  ngAfterContentInit(): void {
    if (this.explicitContent.length) {
      this.content = this.explicitContent.first.template;
    } else {
      this.content = this.implicitContent;
    }
  }

}
