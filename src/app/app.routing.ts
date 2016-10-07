import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { GuestComponent } from './guest/guest.component';

import { LoginGuard } from './login/login-guard.service';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: GuestComponent }
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);