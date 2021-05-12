import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../shared/usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userAuth: boolean = false;

  constructor(private router:Router) { }

  fazerLogin(user:Usuario) {
    if(user.email === 'dwu@dwu.com.br' && user.senha === 'DWU@2020') {
      this.userAuth = true;
      this.router.navigate(['/cadastro']);
    } else {
      this.userAuth = false;
      alert('Login ou senha incorreta');
    }
  }
  
  userIsAuth() {
    return this.userAuth;
  }
}
