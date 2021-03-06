import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ClipboardModule } from 'ngx-clipboard';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HipsterIpsumService } from './hipster-ipsum.service';

import 'hammerjs';
import { GenerateIpsumComponent } from './generate-ipsum/generate-ipsum.component';

@NgModule({
  declarations: [
    AppComponent,
    GenerateIpsumComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ClipboardModule
  ],
  providers: [HipsterIpsumService],
  bootstrap: [AppComponent],
  exports: [
   MaterialModule,
   ClipboardModule
  ]
})
export class AppModule { }
