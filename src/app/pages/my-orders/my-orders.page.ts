import { NavigationExtras, Router } from '@angular/router';
import { ApplicationRef, Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { PushService } from '../../services/push.service';
import { OSNotificationPayload } from '@ionic-native/onesignal/ngx';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.page.html',
  styleUrls: ['./my-orders.page.scss'],
})
export class MyOrdersPage implements OnInit {

  existeNotificaciones: boolean = false
  tabID = 'new';
  mensajes: OSNotificationPayload [] = []
  constructor(private router: Router, public pushService: PushService, private applicationRef: ApplicationRef, private ref: ChangeDetectorRef) {}

  ngOnInit() {
    this.pushService.pushListener.subscribe(noti => {
      this.mensajes.unshift(noti)
      this.existeNotificaciones = true
      this.applicationRef.tick()
    })
  }

  async ionViewWillEnter() {
    // console.log('ionViewWillEnter');
    this.mensajes = await this.pushService.getMensajes()
    if(this.mensajes.length > 0) {
      this.existeNotificaciones = true
    } else {
      this.existeNotificaciones = false
    }
  }

  segmentChanged(eve) {
      console.log(eve.detail.value);
      this.tabID = eve.detail.value;
  }

  async borrarNotificacion() {
    await this.pushService.borrarMensajes()
    this.mensajes = [];
    this.existeNotificaciones = false
  }

  

}
