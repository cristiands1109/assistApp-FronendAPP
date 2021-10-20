import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PharmacyPageRoutingModule } from './pharmacy-routing.module';

import { PharmacyPage } from './pharmacy.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PharmacyPageRoutingModule
  ],
  declarations: [PharmacyPage]
})
export class PharmacyPageModule {}
