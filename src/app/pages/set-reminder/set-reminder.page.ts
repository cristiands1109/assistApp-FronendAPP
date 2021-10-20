import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

import { AccidenteService } from '../../services/accidente.service';
import { TipoEmergencia, Nivel, Emergencia, RespUsuario } from '../../interfaces/interfaces';
import { NgForm } from '@angular/forms';
import { UsuarioService } from '../../services/usuario.service';


declare var window: any;


@Component({
  selector: 'app-set-reminder',
  templateUrl: './set-reminder.page.html',
  styleUrls: ['./set-reminder.page.scss'],
})
export class SetReminderPage implements OnInit {
  
  token = '';
  imageStore;
  quieresubirIMG: boolean = false;
  tipoEmergencia: TipoEmergencia;
  geodata;
  banderaGeo: boolean = false;
  userID: string;
  opcion: string;
  emerID: string;
  CameraOPTS: CameraOptions;

  customPopoverOptionsAccidente: any = {
    header: 'Tipo de Accidente',
    subHeader: 'Seleccion de accidente',
    message: 'Seleccione un tipo'
  }

  customPopoverOptionsNivel: any = {
    header: 'Nivel de Emergencia',
    subHeader: 'Seleccion la gravedad del accidente',
    message: 'Seleccione un nivel'
  }

  registroEmergencia = {
    relatoria: '',
    direccion: '',
    longitud: '',
    latitud: '',
    img: '',
    nivel: '',
    denunciante: '',
    tipo_emergencia: '',
  }

  constructor( private navCtrl: NavController, 
    private geo: Geolocation, 
    private accidenteService: AccidenteService,
    private usuarioService: UsuarioService,
    private camera: Camera) { }

  async ngOnInit() {
  
    this.token = localStorage.getItem('token');
    this.opcion = localStorage.getItem('data');
    await this.getOptsEmergencias(this.token, this.opcion);
    await this.getUsuario(this.token);
    await this.getGeo();
    
  }
  

// METODO PARA VOLVER ATRAS
  volver() {
    this.navCtrl.back()
    localStorage.removeItem('data');
  }


// OBTENER TIPO DE EMERGENCIA MEDIANTE DESCRIPCION
  getOptsEmergencias(token: string, data: string) {

    this.accidenteService.obtenerTipoEmergenciaDES(token, data).subscribe(resp => {
      this.tipoEmergencia = resp.tipoEmergenciaDB;
    })

  }
  

// METODO PARA OBTENER EL USUARIO QUE REALIZA LA DENUNCIA

  getUsuario(token: string) {
    this.usuarioService.getUserbyToken(token).subscribe(resp => {
      this.userID = resp.usuario.usuarioID
    })
  }


  // METODO PARA LA OBTENCION DE LOS DATOS INGRESADOS EN EL FORMULARIO Y PROCEDER A SU INSERCION

  async registrarEmergencia(emergenciaForm: NgForm) {
    this.registroEmergencia = await emergenciaForm.value;
    this.registroEmergencia.tipo_emergencia = await this.tipoEmergencia.tipoEmergenciaID
    if (this.banderaGeo) {
      this.registroEmergencia.latitud = await this.geodata.coords.latitude;
      this.registroEmergencia.longitud = await this.geodata.coords.longitude;
    } else {
      this.registroEmergencia.latitud = "";
      this.registroEmergencia.longitud = "";
    }
    if(this.quieresubirIMG) {
      await this.subirIMG(this.imageStore, this.token);
    } else {
      this.registroEmergencia.img = "";
    }
    this.registroEmergencia.denunciante = await this.userID;
    this.registrar(this.registroEmergencia, emergenciaForm);
  }


// OBTENCION DE LA GEOLOCALIZACION

  getGeo() {
    this.geo.getCurrentPosition({maximumAge: 3000, timeout: 5000, enableHighAccuracy: true}).then(resp => {
      // console.log(resp);
      this.geodata = resp;
      this.banderaGeo = true
    }).catch(err => {
      this.banderaGeo = false
      console.log(err);
    })
  }

  // OPCIONES DE CAMARA - GALERIA
  
  camara() {

    const options: CameraOptions = {
      quality: 60,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true,
      sourceType: this.camera.PictureSourceType.CAMERA
    }

    this.procesarImagen(options)
    
  }

  galeria() {
    const options: CameraOptions = {
      quality: 60,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
    }

    this.procesarImagen(options)
  }

  // PROCESAMIENTO DE IMAGEN TOMADA O SUBIDA DESDE GALERIA

  procesarImagen( options: CameraOptions) {

    this.camera.getPicture(options).then((imageData) => {
      
      const imagen = window.Ionic.WebView.convertFileSrc(imageData);
      // console.log('imagen', imagen);
      // console.log('imageData', imageData);
      this.imageStore = imageData
      this.quieresubirIMG = true;
       }, (err) => {
        // Handle error
       });

  }

  

  // METODO DE SUBIDA DE IMAGEN A SERVIDO DE CLOUDINARY

  async subirIMG(image: string, token: string) {
    console.log('subirIMG', image);
    await this.accidenteService.subirImagen(image, token).then(data => {
        console.log(data.response);
        this.registroEmergencia.img = data.response
    }).catch(err => {
        console.log('error subir', err);
    })
  }

  

// METODO DE REGISTRO A BASE DE DATOS DE EMERGENCIA

  async registrar(data, emergenciaForm: NgForm) {
    // console.log('data registrar', data);
    // console.log('data registrar img', data.img);
      const valido = await this.accidenteService.registrarEmergencia(data, this.token);
      if(valido) {
        this.navCtrl.navigateRoot('tabs/home');
        localStorage.removeItem('data');
        
      } else {
        emergenciaForm.resetForm();
      }
  }



}
