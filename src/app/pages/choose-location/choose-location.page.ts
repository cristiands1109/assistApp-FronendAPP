import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-choose-location',
  templateUrl: './choose-location.page.html',
  styleUrls: ['./choose-location.page.scss'],
})
export class ChooseLocationPage implements OnInit {

  constructor(private route: Router, private navCtrl: NavController) { }

  ngOnInit() {
  }

  goToLocationMap() {
      this.route.navigate(['/location-map']);
  }

  goBack() {
      this.navCtrl.back();
  }

}
