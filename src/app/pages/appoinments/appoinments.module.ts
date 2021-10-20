import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppoinmentsPageRoutingModule } from './appoinments-routing.module';

import { AppoinmentsPage } from './appoinments.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppoinmentsPageRoutingModule
  ],
  declarations: [AppoinmentsPage]
})
export class AppoinmentsPageModule {}
