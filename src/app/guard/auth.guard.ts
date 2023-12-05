import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { UsuarioService } from '../services/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
      console.log('paso por el guard');
      return  this.usuarioService.validarToken()
        .pipe(
          tap(estaLogueado => {
              if (!estaLogueado) {
                  this.router.navigateByUrl('/login')
              }
          })
        )
  }


  constructor(private usuarioService: UsuarioService,
              private router: Router) {

  }

}
