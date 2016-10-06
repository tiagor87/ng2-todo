import { Injectable }     from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivate,
  Router
}                         from '@angular/router';
import { LoginService } from './login.service';

@Injectable()
export class LoginGuard implements CanActivate {
  constructor(private loginService: LoginService, private router: Router) {

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.verificarLogin(state.url);
  }

  private verificarLogin(url: string): boolean {
    if (this.loginService.autenticado) {
      return true;
    }
    this.loginService.urlRedirecionamento = url;
    this.router.navigate(['/login']);
    return false;
  }
}