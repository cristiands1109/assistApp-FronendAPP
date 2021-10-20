import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Storage } from '@ionic/storage-angular';
import { tap, map, catchError } from 'rxjs/operators';
import { of, Observable } from 'rxjs';
import { RespLoginUsuario, Usuario } from '../interfaces/interfaces';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnInit{
  
  token: string = null;
  public usuario: Usuario;
  // url = 'http://localhost:3000/';
  url = environment.url;

  constructor( private http: HttpClient, private storage: Storage) { }

  ngOnInit(){
   
  }
  

  logIn(celular: string, password: string) {
    const data = { celular, password}

    return new Promise( resolve => {
      
      this.http.post<RespLoginUsuario>(`${this.url}assistapp/auth/`, data).subscribe( resp => {
          // console.log('respuestaok');
          this.guardarToken(resp.token);
          resolve(true);
      }, error => {
        if(error) {
          // console.log('hay error');
          this.token = null;
          localStorage.clear();
          resolve(false);
        }
      });

    })
  }

  guardarToken( token: string) {
    this.token = token;
    localStorage.setItem('token',this.token);
    // console.log('guardartoken', this.token);
    // this.storage.set('token', token);
  }



  validarToken(): Observable<boolean> {
    const token = localStorage.getItem('token') || '';
    // console.log(token);
    const headers = new HttpHeaders({
      'x-token': token
    })
    // console.log(headers);
    return this.http.get(`${this.url}assistapp/auth/renew`,{ headers
      // headers: {
      //   'x-token': token
      // }
    })
    .pipe(
      tap((resp: any) => {
        // console.log(this.usuario);
        localStorage.setItem('token', resp.token)
        // console.log(resp.token);
      }),
      map(resp => true),
      catchError(error => of(false))
    );
  }


}
