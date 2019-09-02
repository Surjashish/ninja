import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { FetchDataService } from './fetch-data.service';
import { Component1Component, SafePipe } from './component1/component1.component';
import { HttpClientModule} from '@angular/common/http';
import { Component2Component} from './component2/component2.component';
import { Component3Component } from './component3/component3.component';




@NgModule({
  declarations: [
    AppComponent,
    Component1Component,
    SafePipe,
    Component2Component,
    routingComponents,
    Component3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [FetchDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
