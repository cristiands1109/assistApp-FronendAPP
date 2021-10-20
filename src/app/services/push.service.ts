import { Injectable, EventEmitter } from '@angular/core';
import { OneSignal, OSNotification, OSNotificationPayload } from '@ionic-native/onesignal/ngx';
import { async } from '@angular/core/testing';

@Injectable({
  providedIn: 'root'
})
export class PushService {

  constructor(private oneSignal: OneSignal) { this.cargarMensajes() }

  existeMensajes: boolean = false;
  mensajes: OSNotificationPayload [] = [
    // {
    //   title: 'Titulo Notificacion',
    //   body: 'Accidente de transito',
    //   date: new Date()
    // }
  ]

  pushListener = new EventEmitter<OSNotificationPayload>();

  async getMensajes() {
    await this.cargarMensajes()
    return [...this.mensajes]
  }

  configuracionInicialPush() {
    console.log('iniciado onesignal');
  
    this.oneSignal.startInit('42df7310-9a74-42e4-95e9-473d8e25dd89', '644763267926');

    this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.Notification);

    this.oneSignal.handleNotificationReceived().subscribe((notificacion) => {
      console.log('notificacion recibida', notificacion);
      this.notificacionRecibida(notificacion)
    });

    this.oneSignal.handleNotificationOpened().subscribe( async (notificacion) => {
      console.log('notificacion abierta', notificacion);
      await this.notificacionRecibida(notificacion.notification)
    });

    this.oneSignal.endInit();
  }


  async notificacionRecibida(notificacion: OSNotification) {

    await this.cargarMensajes();
    const payload = notificacion.payload;
    const existePush = this.mensajes.find(mensaje => mensaje.notificationID === payload.notificationID);


    if(existePush) {
      return;
    }

    this.mensajes.unshift(payload);
    this.pushListener.emit(payload)
    await this.guardarMensajes()
  }
  
  guardarMensajes() {
    localStorage.setItem('notificaciones', JSON.stringify(this.mensajes))
  }

  async cargarMensajes() {
    const data = await JSON.parse( localStorage.getItem('notificaciones')) || []
    // console.log(data);
    // if(data === '[]') { console.log('no hay data')}
    if (data.length === 0) {
      // console.log('no data');
      this.mensajes = []
      this.existeMensajes = false;
    } else {
      // console.log('hay data');
      // this.mensajes = await JSON.parse(data)
      this.mensajes = await data
      this.existeMensajes = true
    }
    return this.mensajes;
  }

  async borrarMensajes() {
    await localStorage.removeItem('notificaciones');
    this.mensajes = [];
    this.existeMensajes = false;
    this.guardarMensajes();
  }
}
