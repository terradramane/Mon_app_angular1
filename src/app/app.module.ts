 import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { registerLocaleData } from '@angular/common';
import  localeFr from '@angular/common/locales/fr';
import { HttpClientModule } from '@angular/common/http';
import {  ActivatedRoute, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { HotelModule } from './hotels/hotel.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';




registerLocaleData(localeFr, 'fr');

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HotelModule,


    AppRoutingModule,

  ],






  bootstrap: [AppComponent],

  providers: [ {provide:ActivatedRoute, useValue: null} ]




})


export class AppModule { };


