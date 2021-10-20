import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GetAmbulancePageRoutingModule } from './get-ambulance-routing.module';

import { GetAmbulancePage } from './get-ambulance.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GetAmbulancePageRoutingModule
  ],
  declarations: [GetAmbulancePage]
})
export class GetAmbulancePageModule {}
