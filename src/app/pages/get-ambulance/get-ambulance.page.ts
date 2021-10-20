import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-ambulance',
  templateUrl: './get-ambulance.page.html',
  styleUrls: ['./get-ambulance.page.scss'],
})
export class GetAmbulancePage implements OnInit {

  tabID = 1;

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  goBack() {
      this.navCtrl.back()
  }

}
