import {
  AfterContentInit,
  Component,
  ContentChildren,
  OnInit,
  QueryList,
} from '@angular/core';
import {TabDirective} from "../tab/tab.directive";
import {startWith} from "rxjs/operators";

@Component({
  selector: 'tabs',
  templateUrl: './tabs.component.html'
})
export class TabsComponent implements OnInit, AfterContentInit {

  tabs: TabDirective[] = [];

  selectedIndex: number = 0;

  @ContentChildren(TabDirective) private tabsQueryList!: QueryList<TabDirective>;

  constructor() { }

  handleTabClick(index: number): void {
    this.selectedIndex = index;
  }

  ngAfterContentInit() {
    this.tabsQueryList.changes.pipe(
      startWith(this.tabsQueryList)
    ).subscribe(tabsQueryList => {
      this.tabs = tabsQueryList.toArray();

      if (tabsQueryList.length <= this.selectedIndex) {
        this.selectedIndex = 0;
      }
    });
  }

  ngOnInit(): void {
  }

}
