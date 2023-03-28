import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GenericService {

  emailAPI: string = environment.apiURL;

  constructor(private http: HttpClient) { }

  enviarFormulario(formulario: any): Observable<any> {
    return this.http.post<any>(this.emailAPI, formulario);
  }

}
