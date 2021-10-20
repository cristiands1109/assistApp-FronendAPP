import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { Storage } from '@ionic/storage-angular';
import { RegistroService } from 'src/app/services/registro.service';
import { Role, Departamento, Ciudad } from '../../interfaces/interfaces';


@Component({
  selector: 'app-verification',
  templateUrl: './verification.page.html',
  styleUrls: ['./verification.page.scss'],
})
export class VerificationPage implements OnInit {

  rol: Role[] = [];
  departamento: Departamento[] = []
  ciudades: Ciudad[] = []

  usuarioRegistro = {
    celular: '',
    nombre: '',
    apellido: '',
    password: '',
    departamento: '',
    ciudad: '',
    rol: ''
  }

  constructor(private route: Router, private storage: Storage ,private navCtrl: NavController, private authService: AuthService, private registroService: RegistroService) { 
  
  }


  ngOnInit(){

    
    // OBTENEMOS LOS DEPARTAMENTOS
    this.registroService.obternerDepartamento().subscribe(resp => {
      this.departamento.push(...resp.Departamento);
    })

  }


  // al hacer clic en regstrar ejecutamos la siguiente funcion
  async onRegister(registerForm: NgForm) {

    // validamos que el formulario sea valido
    if(registerForm.invalid) { console.log('invalid'); return; }  
      
      // hacemos uso de una constante para capturar el valor de lo que resuleve la promesa 
      // creada en el servicio
     const valido = await this.registroService.registrarUsuario(this.usuarioRegistro);


    if(valido) {

      // en caso que la promesa retorne true entonces navegamos al home
      // ya que login fue exitoso
      this.navCtrl.navigateRoot('home');
    } else {
      // caso contrario reseteamos el formulario
      registerForm.resetForm();
    }
  }


  goBack() {
    this.navCtrl.back()
  }


  /** METODO PARA OBTENER DEPARTAMENTO SELECCIONADO */
  
  obtenerDepartamento(event:CustomEvent) {
    
    const data = event.detail.value;
    // llamamos metodo para obtener las ciudades segun departamentoID
    this.obtenerCiudades(data);
    // asignamos el departamento ID al objeto de registro de usuario
    this.usuarioRegistro.departamento = data;
  }

  /** METODO PARA OBTENER LAS CIUDADES SEGUN DEPARTAMENTO ID */

  obtenerCiudades(depID: string) {

    // hacemos uso del servicio para obtener la respuesta del backend y asignar a la variable creada
    this.registroService.obtenerCiudades(depID).subscribe(resp => {
      this.ciudades.push(...resp.Ciudad)
    });
  }

  /** OBTENER CIUDAD SELECCIONADA */

  ciudadSeleccionada(event: CustomEvent){
    // asignamos el ID de la ciudad seleccionada a nuestro objeto de usuario
    this.usuarioRegistro.ciudad = event.detail.value;
  }

}
