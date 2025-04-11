import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SsoLoginComponent } from './pages/sso-login/sso-login.component';
import { SsoPostloginComponent } from './pages/sso-postlogin/sso-postlogin.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'sso/:domain', component: SsoLoginComponent },
  { path: 'postlogin', component: SsoPostloginComponent },
  { path: 'home', component: DashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
