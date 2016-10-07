import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AdminModule } from './admin/admin.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { GuestComponent } from './guest/guest.component';

import { LoginGuard } from './login/login-guard.service';
import { LoginService } from './login/login.service';

import {routing} from './app.routing';

@NgModule({
  imports: [
    AdminModule,
    BrowserModule,
    RouterModule,
    FormsModule,
    routing
  ],
  declarations: [
    AppComponent,
    LoginComponent,
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