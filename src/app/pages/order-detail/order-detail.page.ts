import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { DenunciasService } from '../../services/denuncias.service';
import { Emergencia } from '../../interfaces/interfaces';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.page.html',
  styleUrls: ['./order-detail.page.scss'],
})
export class OrderDetailPage implements OnInit {

  emergenciaID: string;
  emergenciaCargada: boolean = false;
  public emergenciaSeleccionada: Emergencia;
  orderType;
  constructor(private route: ActivatedRoute,
              private navCtrl: NavController,
              private denunciaService: DenunciasService) {
      this.route.queryParams.subscribe(data => {
          // console.log(data);
          this.emergenciaID = data.value
          this.getEmergenciabyID(this.emergenciaID)
          this.orderType = data.value;
      })
  }

  ngOnInit() {
  }

  getEmergenciabyID(emergenciaID){
    this.denunciaService.obtenerEmergenciabyID(emergenciaID).subscribe( emergencia => {
      // console.log(emergencia);
      this.emergenciaSeleccionada = emergencia
      this.emergenciaCargada = true;
    })
  }
  goBack() {
      this.navCtrl.back()
  }



}
