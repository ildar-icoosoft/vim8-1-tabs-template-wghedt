import {Component, ContentChild, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {LazyTabContentDirective} from "../lazy-tab-content/lazy-tab-content.directive";

@Component({
  selector: 'tab-content',
  templateUrl: './tab-content.component.html',
})
export class TabContentComponent implements OnInit {

  content: TemplateRef<any> | null = null;

  @ContentChild(LazyTabContentDirective, {read: TemplateRef, static: true})
  private explicitContent: TemplateRef<any>;

  @ViewChild(TemplateRef, {static: true})
  private implicitContent!: TemplateRef<any>;

  constructor() { }

  ngOnInit(): void {
    this.content = this.explicitContent || this.implicitContent;
  }

}
