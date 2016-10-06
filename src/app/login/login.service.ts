import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {
  autenticado: boolean;
  urlRedirecionamento: string;
  
  entrar(email: string, senha: string): Promise<string> {
    if (email === 'tiago@nquatro.com.br' && senha === '123456') {
      this.autenticado = true;
      return Promise.resolve(this.urlRedirecionamento || '/admin');
    }
    return Promise.reject<string>('Email ou senha inválidos.');
  }

  sair(): Promise<void> {
    this.autenticado = false;
    return Promise.resolve();
  }
}