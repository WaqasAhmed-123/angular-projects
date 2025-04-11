import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ImgFiltersComponent } from './img-filters/img-filters.component';
import { ImgCroperComponent } from './img-croper/img-croper.component';
import { HttpClientModule } from '@angular/common/http';
import { ImgResizeComponent } from './img-resize/img-resize.component';

@NgModule({
  declarations: [
    AppComponent,
    ImgFiltersComponent,
    ImgCroperComponent,
    ImgResizeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
