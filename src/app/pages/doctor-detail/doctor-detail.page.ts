import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
declare var google: any;

@Component({
  selector: 'app-doctor-detail',
  templateUrl: './doctor-detail.page.html',
  styleUrls: ['./doctor-detail.page.scss'],
})
export class DoctorDetailPage implements OnInit {

  @ViewChild('map', {static: true}) mapElement: ElementRef;
  map: any;
  tabID = 'doctor';

  images = [
    'assets/imgs/g1.jpg',
    'assets/imgs/g2.jpg',
    'assets/imgs/g3.jpg',
    'assets/imgs/g4.jpg',
    'assets/imgs/g5.jpg',
    'assets/imgs/g6.jpg',
    'assets/imgs/g7.jpg',
  ];

  constructor(private route: Router, private navCtrl: NavController) { }

  ngOnInit() {
      // this.loadMap();
  }

  segmentChanged(eve) {
      console.log(eve.detail.value);
      this.tabID = eve.detail.value;
  }

  loadMap(){
      let latLng = new google.maps.LatLng(-34.9290, 138.6010);
      let mapOptions = {
          center: latLng,
          zoom: 15,
          disableDefaultUI: true,
          mapTypeId: google.maps.MapTypeId.ROADMAP
      }
      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
  }

  goToBooking() {
      this.route.navigate(['/booking']);
  }

  goBack() {
      this.navCtrl.back();
  }

}
