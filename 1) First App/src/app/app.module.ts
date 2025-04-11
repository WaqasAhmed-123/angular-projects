import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {Routes, RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PropertyCardComponent } from './property-card/property-card.component';
import { PropertListComponent } from './propert-list/propert-list.component';
import { PropertyService } from './services/property.service';
import { AddPropertyComponent } from './add-property/add-property.component';
import { PropertyDetailComponent } from './property-detail/property-detail.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TemplateFormComponent } from './practice/template-form/template-form.component';
import { ReactiveFormComponent } from './practice/reactive-form/reactive-form.component';
import { AddUserComponent } from './practice/add-user/add-user.component';
import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';
import { LoginComponent } from './Auth/login/login.component';

const appRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'add-user', component: AddUserComponent},
  {path: '', component: PropertListComponent},
  {path: 'buy-property', component: AddPropertyComponent},
  {path: 'add-property', component: AddPropertyComponent},
  {path: 'property-list', component: AddPropertyComponent},
  {path: 'property-detail/:id', component: PropertyDetailComponent},
  {path: 'template-form', component: TemplateFormComponent},
  {path: 'reactive-form', component: ReactiveFormComponent},

  //page not found link setup
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    PropertyCardComponent,
    PropertListComponent,
    AddPropertyComponent,
    PropertyDetailComponent,
    TemplateFormComponent,
    ReactiveFormComponent,
    AddUserComponent,
    LoginComponent,
    NotFoundComponent
   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    BsDropdownModule.forRoot()
  ],
  providers: [
    PropertyService,
    UserService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
