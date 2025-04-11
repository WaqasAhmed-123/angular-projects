import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapDirComponent } from './map-direction/map-dir/map-dir.component';
import { MapBasicComponent } from './map-basic/map-basic.component';
import { HomeComponent } from './home/home.component';
import { DynamicDirectionComponent } from './dynamic-direction/dynamic-direction.component';
import { MapAdvancedComponent } from './map-advanced/map-advanced.component';
import { MapDestinationComponent } from './map-destination/map-destination.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent, title: 'Home Page' },
  { path: 'basic-map', component: MapBasicComponent, title: 'Map' },
  { path: 'direction', component: MapDirComponent, title: 'Map Directions' },
  { path: 'dynamic-direction', component: DynamicDirectionComponent, title: 'Dynamic Directions' },
  { path: 'map-advance', component: MapAdvancedComponent, title: 'Advanced Marker' },
  { path: 'map-destination', component: MapDestinationComponent, title: 'Destination' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
