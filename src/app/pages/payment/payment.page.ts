import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {

  tabID = 1;
  constructor(private route: Router, private navCtrl: NavController) { }

  ngOnInit() {
  }

  goToTabs() {
      this.route.navigate(['/tabs']);
  }

  goBack() {
    this.navCtrl.back();
  }

}
