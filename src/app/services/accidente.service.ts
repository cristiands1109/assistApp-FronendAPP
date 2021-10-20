import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RespNivel, RespTipoEmergencia, TipoEmergencia } from '../interfaces/interfaces';
import { AlertController } from '@ionic/angular';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { File } from '@ionic-native/file';

@Injectable({
  providedIn: 'root'
})
export class AccidenteService {

  constructor( private http: HttpClient, private alertController: AlertController, private fileTransfer: FileTransfer) { }

  // url: string = 'http://localhost:3000/';
  url: string = environment.url;


  obtenerTipoEmergencia(token: string){
    const headers = new HttpHeaders({
      'x-token': token
    })
    return this.http.get<RespTipoEmergencia>(`${this.url}assistapp/tipoemergencia`,{headers});
  }

  obtenerTipoEmergenciaDES(token: string, data: string){
    const headers = new HttpHeaders({
      'x-token': token
    })
    return this.http.get<RespTipoEmergencia>(`${this.url}assistapp/tipoemergencia/descripcion/${data}`,{headers});
  }

  obtenerNiveldeEmegencia(token: string) {
    const headers = new HttpHeaders({
      'x-token': token
    })
    return this.http.get<RespNivel>(`${this.url}assistapp/nivel`, {headers});
  }


  registrarEmergencia(data, token: string) {
    // console.log('registrarEmergencia en emergencia service',data);
    const headers = new HttpHeaders({
      'x-token': token
    })
    return new Promise(resolve => {
      this.http.post(`${this.url}assistapp/emergencia/`,data, {headers}).subscribe(resp => {
        // console.log('registrado', resp);
        // console.log(resp);
        const msgOK = resp['msg'];
        this.presentAlert(msgOK, 'OK')
        resolve(true)
      }, (err) => {
        console.log(err);
        const msgError = err.error.errors[0].msg
        if(err) {
          this.presentAlert(msgError, 'Error')
          resolve(false)
        }
      })
    })
  }


  subirImagen(image: string, token: string ) {
    const options: FileUploadOptions = {
      fileKey: 'archivo',
      headers: {
        'x-token': token
      }
      
    }

    const fileTransfer: FileTransferObject = this.fileTransfer.create();

    return fileTransfer.upload(image, `${this.url}assistapp/upload/emergencia`,options)
  }

 


  // mostrar mensaje de alerta
  async presentAlert(mensaje: string, header: string) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: header,
      subHeader: '',
      message: mensaje,
      buttons: ['OK']
    });
    await alert.present();
  }

}
