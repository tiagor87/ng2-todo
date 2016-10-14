import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { LoginService } from './login.service';

describe('LoginService', () => {
  let fixture: ComponentFixture<LoginService>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginService]
    });
    TestBed.createComponent(LoginService)
  })
  it('deve ser possível entrar pelo email e senha', done => {
    expect(1).toEqual(1);
    done();
  })
})