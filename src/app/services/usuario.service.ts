import { Injectable, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap, map, catchError } from 'rxjs/operators';
import { pipe, of, from } from 'rxjs';


// import 'rxjs/add/operator/mergeMap';
// import 'rxjs/add/observable/fromPromise';
import { Usuario, RespUsuario } from '../interfaces/interfaces';
import { AlertController } from '@ionic/angular';
import { AuthService } from './auth.service';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  
  public usuario: Usuario;
 
  constructor( private storage: Storage, private http: HttpClient, public alertController: AlertController, private authService: AuthService) { }

  

  // url: string = 'http://localhost:3000/';
  url: string = environment.url;


  obtenerUsuario(token: string) {
    const headers = new HttpHeaders({
      'x-token': token
    })
    return this.http.get<Usuario>(`${this.url}assistapp/auth/getuser`,{headers});
  }


  editarUsuario(usuario: Usuario) {

    console.log('service usuario');

    return new Promise(resolve => {

      // peticion para crear el usuario nuevo
      this.http.put(`${this.url}assistapp/usuario/${usuario.celular}`,usuario).subscribe(resp => {
  
        // funcion guardar token en localstorage
        this.authService.guardarToken(resp['token']);
        resolve(true)

      }, (err) => {
        // en caso de un error guardamos el mensaje de error en una variable para -
        // mostrar luego en un alert
        const msgError = err.error.errors[0].msg

        if(err) {
          // en caso haya un erro se presentara la alerta
          this.presentAlert(msgError);
          resolve(false)
        }
      })
      
    })

  }


// mostrar mensaje de alerta
  async presentAlert(error) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Error',
      subHeader: '',
      message: error,
      buttons: ['OK']
    });
    await alert.present();
  }


  getUserbyToken(token: string) {
    const headers = new HttpHeaders({
      'x-token': token
    })
    return this.http.get<RespUsuario>(`${this.url}assistapp/auth/getuser`,{headers}).pipe(
      tap( resp => {
        this.usuario = resp.usuario
      })
    );
  }
  
  
}
