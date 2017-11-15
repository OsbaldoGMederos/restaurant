import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import {AppRoutingModule} from './app-routing.module';
import { PlatillosComponent } from './platillos/platillos.component';
import { BebidasComponent } from './bebidas/bebidas.component';

@NgModule({
  declarations: [
    AppComponent,
    PlatillosComponent,
    BebidasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
