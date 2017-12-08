import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import {AppRoutingModule} from './app-routing.module';
import { PlatillosComponent } from './platillos/platillos.component';
import { BebidasComponent } from './bebidas/bebidas.component';

import { PlatillosService } from './platillos.service';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MeseroComponent } from './mesero/mesero.component';
import { ChefComponent } from './chef/chef.component';
import { BarComponent } from './bar/bar.component';

@NgModule({
  declarations: [
    AppComponent,
    PlatillosComponent,
    BebidasComponent,
    LoginComponent,
    HomeComponent,
    AboutComponent,
    MeseroComponent,
    ChefComponent,
    BarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [PlatillosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
