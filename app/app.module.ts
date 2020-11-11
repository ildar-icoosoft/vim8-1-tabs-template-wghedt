import { BrowserModule } from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {TestComponent} from "./test.component";
import {TabsModule} from "./tabs/tabs.module";

@NgModule({
  declarations: [
    AppComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TabsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
