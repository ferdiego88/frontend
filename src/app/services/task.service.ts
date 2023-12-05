import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { map } from 'rxjs';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  get token()  {
    return localStorage.getItem('token') || '';
  }

  constructor(private http: HttpClient) { }


  getTareas() {

    return this.http.get(`${base_url}/tareas`, {
      headers: {
        'x-token': this.token
      }
    }).pipe(
      map((resp: any) => {
        return resp.tareas
      })
    )
  }

  updateTarea(idTarea: string, estado: string) {

    const request = {
      estado
    }
    console.log(estado);

    return this.http.put(`${base_url}/tareas/${idTarea}`,request,{
      headers: {
        'x-token': this.token
      },
    }).pipe(
      map((resp: any) => {
        return resp;
      })
    )
  }

}
