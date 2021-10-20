import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { NgForm } from '@angular/forms';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.page.html',
  styleUrls: ['./mobile.page.scss'],
})
export class MobilePage implements OnInit {
  
  usuario = {
    celular: '',
    password: ''
  }

  constructor(private route: Router, private storage: Storage ,private navCtrl: NavController, private authService: AuthService) { }

  ngOnInit() {
    // this.storage.create();
  }


  async onLogin(loginForm: NgForm) {

    if(loginForm.invalid) { console.log('invalid'); return; }  

    const valido = await this.authService.logIn(this.usuario.celular, this.usuario.password);

    if(valido) {
      this.navCtrl.navigateRoot('tabs/home');
    } else {
      // hay que mostrar informacion
      loginForm.resetForm();
    }
  }

  goToVerification() {
      this.route.navigate(['/verification']);
  }

  goBack() {
    this.navCtrl.back()
  }



}
