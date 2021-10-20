import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { RespuestaRoles, RespuestaDepartamento, Usuario } from '../interfaces/interfaces';
import { AlertController } from '@ionic/angular';
import { AuthService } from './auth.service';
import { Storage } from '@ionic/storage-angular';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  // token: string = null;
  // url: string = 'http://localhost:3000/';
  url: string = environment.url;

  constructor( private http: HttpClient, public alertController: AlertController, private authService: AuthService) { }






  

  obternerDepartamento(){
    return this.http.get<RespuestaDepartamento>(`${this.url}assistapp/departamento/`);
  }

  obtenerCiudades(departamentoID: string){
    return this.http.get<RespuestaDepartamento>(`${this.url}assistapp/ciudad/consulta/${departamentoID}`)
  }


  
  registrarUsuario(usuario) {

    console.log('service');

    return new Promise(resolve => {

      // peticion para crear el usuario nuevo
      this.http.post(`${this.url}assistapp/usuario/`,usuario).subscribe(resp => {
  
        // funcion guardar token en localstorage
        this.authService.guardarToken(resp['token']);
        resolve(true)

      }, (err) => {
        // en caso de un error guardamos el mensaje de error en una variable para -
        // mostrar luego en un alert
        const errordata = err.error.errors[0].msg

        if(err) {
          // en caso haya un erro se presentara la alerta
          this.presentAlert(errordata);
          resolve(false)
        }
      })
      
    })

  }


  
  editarUsuario(usuario: Usuario, token: string) {

    // console.log('service usuario');

    return new Promise(resolve => {

      const headers = new HttpHeaders({
        'x-token': token
      })
      // peticion para crear el usuario nuevo
      this.http.put(`${this.url}assistapp/usuario/${usuario.celular}`,usuario, {headers}).subscribe(resp => {
  
        // funcion guardar token en localstorage
        // this.authService.guardarToken(resp['token']);
        resolve(true)

      }, (err) => {
        // en caso de un error guardamos el mensaje de error en una variable para -
        // mostrar luego en un alert
        const errordata = err.error.errors[0].msg

        if(err) {
          // en caso haya un erro se presentara la alerta
          this.presentAlert(errordata);
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


}
