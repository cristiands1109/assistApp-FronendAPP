import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario, Departamento, Ciudad } from '../../interfaces/interfaces';
import { RegistroService } from '../../services/registro.service';
import { NgForm } from '@angular/forms';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  token = ''
  userdata: Usuario;
  departamento: Departamento[] = []
  ciudades: Ciudad[] = []

  changeName = false;
  changeApellido = false;
  changePhone = false;
  changeDepartamento = false;
  changeCiudad = false;


  constructor(private router: Router, 
              private usuarioService: UsuarioService, 
              private registroService: RegistroService, 
              private navCtrl: NavController
              ) { }

  async ngOnInit() {

    // obtenemos el token que se encuentra en el localstorage
    this.token = localStorage.getItem('token');

    // hacemos el llamado del metodo getData para obtener los datos del usuario
    // se encuentra en el token
    await this.getData(this.token)

    // hacemos el llamado del metodo obtenerDepar para cargar la seleccion de departamentos 
    await this.obtenerDepar();
  }

  goToDocList() {
      this.router.navigate(['/doc-list']);
  }


  /** METODO PARA OBTENER LOS DATOS DEL USUARIO QUE VIENEN EN EL TOKEN */
  async getData(token: string) {

    await this.usuarioService.obtenerUsuario(token).subscribe(resp => {
      // console.log('Usuario',resp['usuario']);
      this.userdata = resp['usuario'];
      // console.log('user data departamento', this.userdata.departamento);

      // en caso que el departamento no exista en el usuario entonces retornamos
      if(this.userdata.departamento === undefined) { return;}

      // en caso que pase la ultima condicion procedemos a hacer el llamado
      // para obtener el departamento y la ciudad actual
      // this.obtenerdepactual(this.userdata.departamento); // no hace falta
      this.obtenerCiudad(this.userdata.departamento)
    })

  }

  /** METODO PARA OBTENER EL DEPARTAMENTO ACTUAL */
  /** NO HACE FALTA */
  // obtenerdepactual(depID: string) {
  //   const depActual: Departamento[] = this.departamento.filter(data => data.departamentoID === depID)
  //   // console.log(depActual);
  // }

  /** METODO PARA OBTENER LA CIUDAD ACTUAL */
  obtenerciudadactual(ciuID: string) {
    const ciuActual: Ciudad[] = this.ciudades.filter(data => data.ciudadID === ciuID);
    // prueba
    this.ciudades = ciuActual
  }


  /** OBTENER DEPARTAMENTO SELECCIONADO EN CASO DE QUE CAMBIE EL USUARIO*/
  obtenerDepartamento(event: CustomEvent) {
    // console.log('Obtener departamento EVENT');
    // console.log(event.detail.value);
    this.userdata.departamento=event.detail.value
    this.ciudades = [];
    this.obtenerCiudad(event.detail.value)
  }

  /** OBTENER CIUDAD SELECCIONADA EN CASO QUE CAMBIE EL USUARIO */
  ciudadSeleccionada(event: CustomEvent) {
    // console.log('Obtener ciudad EVENT');
    this.userdata.ciudad = event.detail.value
    // console.log(this.userdata);
  }
  

  /** OBTENER DEPARTAMENTOS */
  obtenerDepar() {
    
    this.registroService.obternerDepartamento().subscribe(resp => {
  
      // hacemos la insercion en el arreglo de la respuesta
      this.departamento.push(...resp.Departamento);
    
    })
  }

  /** OBTENER CIUDAD */
  obtenerCiudad(depID: string) {
    this.registroService.obtenerCiudades(depID).subscribe(resp => {
      
      // hacemos la insersion en el arreglo de ciudades
      this.ciudades.push(...resp.Ciudad);

      // si la ciudad id no existe retorna
      if(this.userdata.ciudad === undefined) { 
        // this.obtenerciudadactual(this.userdata.ciudad)
        return; 
      }
    })
  }



  async onEditarForm(onEditarForm: NgForm) {
    console.log(onEditarForm.valid);
    console.log(onEditarForm.value);
    // console.log('departamento ',onEditarForm.value.departamento);
    // console.log('ciudad ',onEditarForm.value.ciudad);
    // console.log(this.userdata);

    if ( !onEditarForm.value.ciudad) {
      console.log('no tiene ciudad');
    }
    return
    const valido = await this.registroService.editarUsuario(this.userdata, this.token)
    if(valido) {

      // en caso que la promesa retorne true entonces navegamos al home
      // ya que login fue exitoso
      this.navCtrl.back();
    } else {
      // caso contrario reseteamos el formulario
      onEditarForm.resetForm();
    }
  }

}
