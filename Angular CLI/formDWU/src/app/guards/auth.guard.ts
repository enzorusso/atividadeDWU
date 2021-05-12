import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../usuarios/formulario/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate{

  constructor(
    private AuthService:AuthService,
    private router: Router
    ) { }
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):Observable<boolean> | boolean{
    if(this.AuthService.userIsAuth()){
      return true;
    }

    this.router.navigate(['/formulario']); 
    return false;

  }
}
