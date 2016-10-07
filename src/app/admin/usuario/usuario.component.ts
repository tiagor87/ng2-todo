import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'usuario',
  template: `
  <h1>Usuário</h1>
  <router-outlet></router-outlet>
  `
})
export class UsuarioComponent { }