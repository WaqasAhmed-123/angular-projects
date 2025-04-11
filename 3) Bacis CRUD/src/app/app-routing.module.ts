import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { authGuard } from './auth/auth.guard';
import { UpdatePasswordComponent } from './auth/update-password/update-password.component';
import { UpdateProfileComponent } from './auth/update-profile/update-profile.component';
import { EmployeeDashboardComponent } from './employee/employee-dashboard/employee-dashboard.component';
import { ErrorPageComponent } from './layouts/error-page/error-page.component';
import { authDeactiveGuard } from './auth/auth-deactive.guard';
import { AddUserComponent } from './admin/add-user/add-user.component';
import { ViewUserComponent } from './admin/view-user/view-user.component';
import { ViewTaskComponent } from './common/view-task/view-task.component';
import { AddTaskComponent } from './common/add-task/add-task.component';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';
import { ChatComponent } from './common/chat/chat.component';

//need to register in app.module.ts in "imports" section

const appRoutes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: '', component: AuthLayoutComponent, canActivate:[authDeactiveGuard],
    children:[
      {path: 'login', component: LoginComponent},
      {path: 'register', component: RegisterComponent},
      {path: 'forgot', component: ForgotPasswordComponent},
      {path: 'reset/:id', component: ResetPasswordComponent}
    ]
  },
  {path: 'common', component: AdminLayoutComponent, canActivate:[authGuard], data: { roles: ['Admin', 'Employee', 'Manager']},
    children:[
      {path: 'profile', component: UpdateProfileComponent},
      {path: 'password', component: UpdatePasswordComponent},
      {path: 'add-task', component: AddTaskComponent},
      {path: 'view-task', component: ViewTaskComponent},
      {path: 'chat', component: ChatComponent},
    ]
  },
  {path: 'admin', component: AdminLayoutComponent, canActivate:[authGuard], data: { roles: ['Admin', 'Manager']},
    children:[
      {path: 'index', component: DashboardComponent},
      {path: 'add-user', component: AddUserComponent, canActivate:[authGuard], data: {roles:['Admin']}},
      {path: 'view-user', component: ViewUserComponent}
    ]
  },
  {path: 'employee', component: AdminLayoutComponent, canActivate:[authGuard], data: { roles: ['Employee']},
    children:[
      {path: 'index', component: EmployeeDashboardComponent}
    ]
  },
  {path: '**', component: ErrorPageComponent} // //page not found link setup

  // {path: 'add-user', component: NavbarComponent},
  // {path: 'buy-property', component: NavbarComponent},
  // {path: 'add-property', component: NavbarComponent},
  // {path: 'property-list', component: NavbarComponent},
  // {path: 'property-detail/:id', component: NavbarComponent},
  // {path: 'template-form', component: NavbarComponent},
  // {path: 'reactive-form', component: NavbarComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
