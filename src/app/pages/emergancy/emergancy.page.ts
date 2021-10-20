import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-emergancy',
  templateUrl: './emergancy.page.html',
  styleUrls: ['./emergancy.page.scss'],
})
export class EmergancyPage implements OnInit {

  constructor(private route: Router, private navCtrl: NavController) { }

  ngOnInit() {
  }

  goToCurrentLocation() {
      this.route.navigate(['/current-location']);
  }

  goToGetAmbulance() {
      this.route.navigate(['/get-ambulance']);
  }

  goBack() {
      this.navCtrl.back()
  }

}
