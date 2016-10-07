import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'admin',
  template: `
  <h1>Admin</h1>
  <a [routerLink]="['./usuario']">Usuário</a>
  <router-outlet></router-outlet>
  `
})
export class AdminComponent { }