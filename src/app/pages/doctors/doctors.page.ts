import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.page.html',
  styleUrls: ['./doctors.page.scss'],
})
export class DoctorsPage implements OnInit {

  doctors = ['General Doctor', 'Skin & Hair', 'Child Care', 'Women\'s Health',
    'Dentists', 'ENT', 'Audiologist' , 'Psychiatrists', 'Radiologist', 'Neurologist'];

  constructor(private route: Router, private navCtrl: NavController) {}

  ngOnInit() {
  }

  goToDoctorList() {
      this.route.navigate(['/doctor-list']);
  }

  goBack() {
      this.navCtrl.back();
  }

}
