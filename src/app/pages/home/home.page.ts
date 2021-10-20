import { Router } from '@angular/router';
import { Component, EventEmitter, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from '../../interfaces/interfaces';
import { MenuController } from '@ionic/angular';
import { AccidenteService } from '../../services/accidente.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit, OnChanges{

  token = '';
  public userdata: Usuario;
  doctors = ['General Doctor', 'Skin & Hair', 'Child Care', 'Women\'s Health',
    'Dentists', 'ENT', 'Audiologist' , 'Psychiatrists', 'Radiologist', 'Neurologist'];
 

  constructor(private route: Router, 
              private usuarioService: UsuarioService, 
              private menuCtrl: MenuController,
              private accidenteService: AccidenteService) { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
  ngOnInit(){
    // this.getUserdata();
  }

  getUserdata() {
    this.token = localStorage.getItem('token');
    if(!this.token) { console.log('token es null', this.token); return;}
    this.usuarioService.obtenerUsuario(this.token).subscribe(resp => {
      console.log(resp['usuario']);
      this.userdata = resp['usuario']
    })
  }


  goToPharmacy() {
      this.route.navigate(['/pharmacy']);
  }

  goToDoctors() {
      this.route.navigate(['/doctors']);
  }

  goToReminders(data: string) {
      this.route.navigate(['/registro-emergencia']);
      localStorage.setItem('data', data);
  }

  goToEmergancy() {
      this.route.navigate(['/emergancy']);
  }

  goToDoctorList() {
      this.route.navigate(['/doctor-list']);
  }


}
