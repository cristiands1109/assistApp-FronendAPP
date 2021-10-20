import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
declare var google: any;

@Component({
  selector: 'app-current-location',
  templateUrl: './current-location.page.html',
  styleUrls: ['./current-location.page.scss'],
})
export class CurrentLocationPage implements OnInit {

  @ViewChild('map', {static: true}) mapElement: ElementRef;
  map: any;

  constructor(private route: Router, private navCtrl: NavController) { }

  ngOnInit() {
      // this.loadMap();
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

  goToGetAmbulance() {
    this.route.navigate(['/get-ambulance']);
  }

  goBack() {
      this.navCtrl.back();
  }

}
