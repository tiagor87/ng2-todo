import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { UsuarioNovoComponent } from './usuario/usuario-novo.component';

import { LoginGuard } from '../login/login-guard.service';

const adminRoutes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [LoginGuard],
    canActivateChild: [LoginGuard],
    children: [
      { path: '' },
      {
        path: 'usuario',
        component: UsuarioComponent,
        children: [
          { path: '', component: UsuarioNovoComponent }
        ]
      }
    ]
  },
];

export const routing: ModuleWithProviders = RouterModule.forChild(adminRoutes);