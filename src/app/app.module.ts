import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent }   from './app.component';
import { LoginComponent }   from './login/login.component';
import { AdminComponent }   from './admin/admin.component';
import { GuestComponent }   from './guest/guest.component';

import { LoginGuard } from './login/login-guard.service';
import { LoginService } from './login/login.service';

import {routing} from './app.routing';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    routing
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    GuestComponent
  ],
  providers: [
    LoginGuard,
    LoginService
  ],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule { }