import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  constructor(private route: Router, private navCtrl: NavController) { }

  ngOnInit() {
  }

  goToPayment2() {
      this.route.navigate(['/payment2']);
  }

  goBack() {
      this.navCtrl.back();
  }

}
