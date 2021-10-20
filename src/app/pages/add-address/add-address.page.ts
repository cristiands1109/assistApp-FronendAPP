import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.page.html',
  styleUrls: ['./add-address.page.scss'],
})
export class AddAddressPage implements OnInit {

  isAddEdit;
  constructor(private route: ActivatedRoute, private navCtrl: NavController) {
    this.route.queryParams.subscribe(data => {
        console.log(data);
        this.isAddEdit = data.value;
    })
  }

  ngOnInit() {
  }

  goBack() {
      this.navCtrl.back();
  }

}
