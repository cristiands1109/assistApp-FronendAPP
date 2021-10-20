import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Storage } from '@ionic/storage-angular';
import { Usuario } from './interfaces/interfaces';
import { UsuarioService } from './services/usuario.service';
import { PushService } from './services/push.service';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit{

  token = '';
  nombre = ''
  apellido = ''
  // userdata: Usuario;
  public userdata: Usuario;
  appPages = [
    {
      url: 'tabs/home',
      title: 'Home'
    },
    // {
    //   url: 'appoinments',
    //   title: 'Notificaciones'
    // },
    //
    {
      url: '/notificaciones',
      title: 'Notificaciones'
    },
    // {
    //   url: 'set-reminder',
    //   title: 'Reminders'
    // },
    //
    {
      url: 'historial',
      title: 'Historial de denuncias'
    },
    //
    // {
    //   url: 'chat',
    //   title: 'Chats'
    // },
    //
    {
      url: '/perfil',
      title: 'Mi Perfil'
    },
  ];
  selectedIndex: any;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    private storage: Storage,
    private usuarioService: UsuarioService,
    private pushService: PushService
  ) {
    this.initializeApp();
  }

  ngOnInit() {

  }

  getUserdata() {
    this.token = localStorage.getItem('token');
    if(!this.token) { 
      // console.log('token es null', this.token); 
    return;
    }
    this.usuarioService.obtenerUsuario(this.token).subscribe(resp => {
      this.userdata = resp['usuario']
      this.nombre = this.userdata.nombre
      this.apellido = this.userdata.apellido

    })
  }

  async onmenuopen() {
    await this.getUserdata()
  }


  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleLightContent();
      this.splashScreen.hide();
      this.pushService.configuracionInicialPush();
      this.getUserdata();
    });
  }

  logout() {
    localStorage.clear()
    this.router.navigate(['/']);
    this.nombre = '';
    this.apellido = '';
  }



}
