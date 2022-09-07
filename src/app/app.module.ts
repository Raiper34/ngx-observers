import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {NgxObserversModule} from "ngx-observers";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxObserversModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
