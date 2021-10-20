import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pharmacy',
  templateUrl: './pharmacy.page.html',
  styleUrls: ['./pharmacy.page.scss'],
})
export class PharmacyPage implements OnInit {

  searchTerm = '';
  allMedicines = [
      {
        name : 'Crocin Pain Relief',
        price : '45.80'
      },
      {
        name : 'Crocin Advance',
        price : '22.50'
      },
      {
        name : 'Crocin Cold $ Flu max',
        price : '70.20'
      },
      {
        name : 'Crocin Mixed Fruit Flavour',
        price : '52.40'
      },
  ];

  medicines = [];

  constructor(private route: Router, private navCtrl: NavController) { }

  ngOnInit() {
  }

  goToCart() {
      this.route.navigate(['/cart']);
  }

  onSearch(eve){
      console.log(eve.detail.value);
      if (this.searchTerm === '') {
          this.medicines = [];
          return;
      }
      this.medicines = this.allMedicines.filter( (item) =>  {
          // console.log(item, this.searchTerm);
          return item.name.toLowerCase().indexOf(eve.detail.value.toLowerCase()) > -1;
      });
  }

  goBack() {
    this.navCtrl.back();
  }

}
