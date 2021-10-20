import { NavController } from '@ionic/angular';
import { NavigationExtras, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment2',
  templateUrl: './payment2.page.html',
  styleUrls: ['./payment2.page.scss'],
})
export class Payment2Page implements OnInit {

  tabID = 1;
  constructor(private router: Router, private navCtrl: NavController) { }

  ngOnInit() {
  }

  goToHome() {
      this.router.navigate(['/tabs/home']);
  }

  goToAddAddress(val) {
      const navData: NavigationExtras = {
          queryParams: {
              value: val
          }
      };
      this.router.navigate(['/add-address'], navData);
  }

  goBack() {
    this.navCtrl.back();
  }

}
