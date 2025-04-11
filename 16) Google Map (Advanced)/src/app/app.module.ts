import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { MapDirComponent } from './map-direction/map-dir/map-dir.component';
import { MapBasicComponent } from './map-basic/map-basic.component';
import { HomeComponent } from './home/home.component';
import { DynamicDirectionComponent } from './dynamic-direction/dynamic-direction.component';
import { HttpClientModule } from '@angular/common/http';
import { MapAdvancedComponent } from './map-advanced/map-advanced.component';
import { MapDestinationComponent } from './map-destination/map-destination.component';

@NgModule({
  declarations: [
    AppComponent,
    MapDirComponent,
    MapBasicComponent,
    HomeComponent,
    DynamicDirectionComponent,
    MapAdvancedComponent,
    MapDestinationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    GoogleMapsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
