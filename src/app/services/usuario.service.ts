import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { LoginForm } from '../interfaces/login.interface';
import { RegisterForm } from '../interfaces/register-form.interace';
import { Observable, catchError, map, tap, of } from 'rxjs';
import { Router } from '@angular/router';
import { Usuario } from '../models/usuario.model';


const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  public usuario!: Usuario;

  constructor(private http: HttpClient,
              private router: Router) { }


  crearUsuario(formData: RegisterForm) {
    return this.http.post(`${base_url}/usuarios`, formData);
  }

  login(formData: LoginForm) {

    if (formData.remember) {
      localStorage.setItem('email', formData.email);
    } else {
      localStorage.removeItem('email');
    }


    return this.http.post(`${base_url}/login`, formData)
      .pipe(
        map( (resp: any) => {

          this.saveDataUserLocalStorage(resp);
          return true;
        })
      )

  }


  saveDataUserLocalStorage(resp: any) {
      localStorage.setItem('id', resp.usuario.uid);
      localStorage.setItem('token', resp.token);
      localStorage.setItem('usuario', JSON.stringify(resp.usuario));
  }


  validarToken(): Observable<boolean>  {
    const token = localStorage.getItem('token') || '';

    return this.http.get(`${base_url}/login/renew`, {
      headers: {
        'x-token': token
      }
    }).pipe(
      tap((resp: any) => {

          const { email, nombre, role, uid } = resp.usuario;

          this.usuario = new Usuario(nombre,email, '', role, uid);
          localStorage.setItem('token', resp.token)
      }),
      map(resp => true),
      catchError(error => of(false))
    )
  }


  logout() {
    localStorage.removeItem('token');
    this.router.navigateByUrl('/login');
  }

}
