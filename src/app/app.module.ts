import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from '@angular/material';
import 'hammerjs';

import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { EbookReaderComponent } from './ebook-reader/ebook-reader.component';
import { EbookRegisterComponent } from './ebook-register/ebook-register.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    EbookReaderComponent,
    EbookRegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
