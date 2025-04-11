import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImgFiltersComponent } from './img-filters/img-filters.component';
import { ImgCroperComponent } from './img-croper/img-croper.component';
import { ImgResizeComponent } from './img-resize/img-resize.component';

const routes: Routes = [
  {
    path: '', component: ImgFiltersComponent
  },
  {
    path: 'page1', component: ImgFiltersComponent
  },
  {
    path: 'page2', component: ImgCroperComponent
  },
  {
    path: 'page3', component: ImgResizeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
