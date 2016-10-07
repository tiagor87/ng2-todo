import { Input, Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  moduleId: module.id,
  templateUrl: 'login.component.html',
  styleUrls:['login.component.css']
})
export class LoginComponent {
  email: string;
  senha: string;
  constructor(private loginService: LoginService, private router: Router) {

  }

  entrar() {
    this.loginService.entrar(this.email, this.senha)
      .then(url => this.router.navigate([url]))
      .catch(mensagem => alert(mensagem));
  }
}