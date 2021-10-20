import { UploadDocumentPage } from './../upload-document/upload-document.page';
import { NavigationExtras, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { DenunciasService } from '../../services/denuncias.service';
import { UsuarioService } from '../../services/usuario.service';
import { AuthService } from '../../services/auth.service';
import { Emergencia } from '../../interfaces/interfaces';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.page.html',
  styleUrls: ['./documents.page.scss'],
})
export class DocumentsPage implements OnInit {

  public emergenciasByUser: Emergencia[] = [];
  usuarioID: string;
  constructor(private router: Router, 
              private modalCtrl: ModalController, 
              private navCtrl: NavController,
              private denunciaService: DenunciasService,
              private authService: AuthService,
              private usuarioService: UsuarioService ) { 

              }

  ngOnInit() {
    this.usuarioService.getUserbyToken(localStorage.getItem('token')).subscribe(({usuario}) => {
      this.usuarioID = usuario.usuarioID
    })
    // this.usuarioID = this.usuarioService.usuario.usuarioID
    // console.log(this.usuarioID);
    this.getEmergencias();
  }
  
  getEmergencias(){
    this.denunciaService.obtenerDenuncias().subscribe(({total, Emergencia}) => {
      // console.log(Emergencia);
      let cont = 0;
      for (let i = 0; i < total; i++) {
        if (Emergencia[i].denunciante['_id'] === this.usuarioID) {
          // console.log(Emergencia[i]);
          this.emergenciasByUser[cont] = Emergencia[i]
          cont++ 
        } 
      }
      // console.log(this.emergenciasByUser);
    })
  }

  goToOrderDetail(val) {
    const navData: NavigationExtras = {
        queryParams: {
            value: val
        }
    };
    this.router.navigate(['/detalle-emergencia'], navData);
  }

  
  
}
