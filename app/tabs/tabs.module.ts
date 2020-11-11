import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsComponent } from './tabs/tabs.component';
import { TabTitleComponent } from './tab-title/tab-title.component';
import { TabContentComponent } from './tab-content/tab-content.component';
import { TabDirective } from './tab/tab.directive';
import { LazyTabContentDirective } from './lazy-tab-content/lazy-tab-content.directive';

@NgModule({
  declarations: [TabsComponent, TabTitleComponent, TabContentComponent, TabDirective, LazyTabContentDirective],
  imports: [
    CommonModule
  ],
  exports: [TabsComponent, TabTitleComponent, TabContentComponent, TabDirective, LazyTabContentDirective]
})
export class TabsModule { }
