import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { LoginForm } from '../interfaces/login.interface';
import { RegisterForm } from '../interfaces/register-form.interace';
import { Observable, catchError, map, tap, of } from 'rxjs';


const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }


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
      localStorage.setItem('id', resp.id);
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
          localStorage.setItem('token', resp.token)
      }),
      map(resp => true),
      catchError(error => of(false))
    )
  }

}
