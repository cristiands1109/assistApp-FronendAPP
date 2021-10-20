import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';
import { RespEmergencia, Emergencia } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DenunciasService {

  constructor(private http: HttpClient) {
   }

   url: string = environment.url;


   obtenerDenuncias(){
     return this.http.get<RespEmergencia>(`${this.url}assistapp/emergencia`);
   }


   obtenerEmergenciabyID(emergenciaID: string){
     const token = localStorage.getItem('token')
     const headers =  new HttpHeaders({
       'x-token': token
     })
     return this.http.get<Emergencia>(`${this.url}assistapp/emergencia/${emergenciaID}`, {headers})
   }

}
