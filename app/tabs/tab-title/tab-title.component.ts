import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';

@Component({
  selector: 'tab-title',
  templateUrl: './tab-title.component.html',
})
export class TabTitleComponent implements OnInit {

  @ViewChild(TemplateRef, {static: true}) content!: TemplateRef<any>;

  constructor() { }

  ngOnInit(): void {
  }

}
