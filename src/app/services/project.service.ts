import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  get token()  {
    return localStorage.getItem('token') || '';
  }

  constructor(private http: HttpClient) { }


  getProjects() {

    return this.http.get(`${base_url}/proyectos`, {
      headers: {
        'x-token': this.token
      }
    }).pipe(
      map((resp: any) => {
        return resp.proyectos
      })
    )
  }
}
