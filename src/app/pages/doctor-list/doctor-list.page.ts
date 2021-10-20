import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.page.html',
  styleUrls: ['./doctor-list.page.scss'],
})
export class DoctorListPage implements OnInit {

  doctors = ['General Doctor', 'Skin & Hair', 'Child Care', 'Women\'s Health',
    'Dentists', 'ENT', 'Audiologist' , 'Psychiatrists', 'Radiologist', 'Neurologist'];

  constructor(private route: Router, private navCtrl: NavController) { }

  ngOnInit() {
  }

  goToDoctorDetail() {
      this.route.navigate(['/doctor-detail']);
  }

  goBack() {
      this.navCtrl.back();
  }

}
