import {ContentChild, Directive} from '@angular/core';
import {TabTitleComponent} from "../tab-title/tab-title.component";
import {TabContentComponent} from "../tab-content/tab-content.component";

@Directive({
  selector: 'tab'
})
export class TabDirective {

  @ContentChild(TabTitleComponent, {static: true}) tabTitle: TabTitleComponent;
  @ContentChild(TabContentComponent, {static: true}) tabContent: TabContentComponent;

  constructor() { }

}
