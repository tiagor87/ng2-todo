import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {
  autenticado: boolean;
  urlRedirecionamento: string;

  USUARIOS: Array<any> = [
    {perfil: 'administrador', email: 'tiago@nquatro.com.br', senha:'123456', rota: '/admin'},
    {perfil: 'convidado', email: 'tiagor87@gmail.com', senha:'123456', rota: '/'},
  ]
  
  entrar(email: string, senha: string): Promise<string> {
    return this.consultarUsuarioPorEmailESenha(email, senha)
      .then(usuario => {
        if (usuario) {
          this.autenticado = true;
          return usuario.rota;
        }
        return Promise.reject<string>('Email ou senha inválidos.');
      });
  }

  sair(): Promise<void> {
    this.autenticado = false;
    return Promise.resolve();
  }

  private consultarUsuarioPorEmailESenha(email: string, senha: string): Promise<any> {
    let usuario = this.USUARIOS.find(u => u.email === email && u.senha === senha);
    return Promise.resolve(usuario);
  }
}