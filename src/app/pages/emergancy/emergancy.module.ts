import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmergancyPageRoutingModule } from './emergancy-routing.module';

import { EmergancyPage } from './emergancy.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmergancyPageRoutingModule
  ],
  declarations: [EmergancyPage]
})
export class EmergancyPageModule {}
