import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AdminComponent }   from './admin.component';
import { UsuarioComponent }   from './usuario/usuario.component';
import { UsuarioNovoComponent }   from './usuario/usuario-novo.component';

import { routing } from './admin.routing';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    routing
  ],
  declarations: [
    AdminComponent,
    UsuarioComponent,
    UsuarioNovoComponent
  ],
  exports: [
    AdminComponent,
    UsuarioComponent
  ],
  providers: [
  ],
  bootstrap: [
  ]
})

export class AdminModule { }