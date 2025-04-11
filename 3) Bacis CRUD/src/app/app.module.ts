import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatBadgeModule} from '@angular/material/badge';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTableModule } from '@angular/material/table';
import {MatPaginatorModule } from '@angular/material/paginator';
import {MatInputModule } from '@angular/material/input';
import {MatSortModule } from '@angular/material/sort';
import {MatDialogModule} from '@angular/material/dialog';
import { NgxChartsModule  } from '@swimlane/ngx-charts';
import { FullCalendarModule } from '@fullcalendar/angular';
import { TooltipModule } from 'ng2-tooltip-directive';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { RegisterComponent } from './auth/register/register.component';
import { UpdateProfileComponent } from './auth/update-profile/update-profile.component';
import { UpdatePasswordComponent } from './auth/update-password/update-password.component';
import { EmployeeDashboardComponent } from './employee/employee-dashboard/employee-dashboard.component';
import { ErrorPageComponent } from './layouts/error-page/error-page.component';
import { AppRoutingModule } from './app-routing.module';
import { AddUserComponent } from './admin/add-user/add-user.component';
import { ViewUserComponent } from './admin/view-user/view-user.component';
import { AddTaskComponent } from './common/add-task/add-task.component';
import { ViewTaskComponent } from './common/view-task/view-task.component';

import { AlertifyService } from './services/alertify.service';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';
import { DatatableComponent } from './components/datatable/datatable.component';
import { LoaderComponent } from './components/loader/loader.component';
import { ApiService } from './services/api.service';
import { HttpInterceptorInterceptor } from './services/http-interceptor.interceptor';
import { DeleteModalComponent } from './components/delete-modal/delete-modal.component';
import { TextInputComponent } from './components/text-input/text-input.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { SelectTestComponent } from './test/select-test/select-test.component';
import { SelectInputComponent } from './components/select-input/select-input.component';
import { SignalrTestComponent } from './test/signalr-test/signalr-test.component';
import { ChatComponent } from './common/chat/chat.component';
import { ChartTestComponent } from './test/chart-test/chart-test.component';
import { NgSelectInputComponent } from './components/ng-select-input/ng-select-input.component';
import { RadioInputComponent } from './components/radio-input/radio-input.component';
import { CheckboxInputComponent } from './components/checkbox-input/checkbox-input.component';
import { CheckboxTestComponent } from './test/checkbox-test/checkbox-test.component';
import { CalendarTestComponent } from './test/calendar-test/calendar-test.component';
import { GridTestComponent } from './test/grid-test/grid-test.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthLayoutComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    UpdateProfileComponent,
    UpdatePasswordComponent,
    ResetPasswordComponent,
    AdminLayoutComponent,
    DashboardComponent,
    AddUserComponent,
    ViewUserComponent,
    AddTaskComponent,
    ViewTaskComponent,
    ChatComponent,
    EmployeeDashboardComponent,
    ErrorPageComponent,
    LoaderComponent,
    SelectTestComponent, //test
    SignalrTestComponent, //test
    ChartTestComponent, //test
    CheckboxTestComponent, //test
    CalendarTestComponent, //test
    GridTestComponent, //test
    DatatableComponent,
    DeleteModalComponent,
    TextInputComponent,
    SelectInputComponent,
    NgSelectInputComponent,
    RadioInputComponent,
    CheckboxInputComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatBadgeModule,
    MatDividerModule,
    MatExpansionModule,
    MatInputModule,
    MatFormFieldModule,
    MatSortModule,
    MatTableModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    NgSelectModule,
    NgxChartsModule,
    FullCalendarModule,
    TooltipModule,
    InfiniteScrollModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorInterceptor,
      multi: true
    },
    ApiService,
    AlertifyService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
