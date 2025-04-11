import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {ClipboardModule} from '@angular/cdk/clipboard';
import { IconsListComponent } from './icons-list/icons-list.component';
import { TabsTestComponent } from './tabs-test/tabs-test.component';
import { AdminlayoutComponent } from './adminlayout/adminlayout.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IconsListComponent,
    TabsTestComponent,
    AdminlayoutComponent
  ],
  imports: [
    BrowserModule,
    ClipboardModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
