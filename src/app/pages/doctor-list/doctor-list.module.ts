import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DoctorListPageRoutingModule } from './doctor-list-routing.module';

import { DoctorListPage } from './doctor-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DoctorListPageRoutingModule
  ],
  declarations: [DoctorListPage]
})
export class DoctorListPageModule {}
