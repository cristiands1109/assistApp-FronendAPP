import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CurrentLocationPageRoutingModule } from './current-location-routing.module';

import { CurrentLocationPage } from './current-location.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CurrentLocationPageRoutingModule
  ],
  declarations: [CurrentLocationPage]
})
export class CurrentLocationPageModule {}
