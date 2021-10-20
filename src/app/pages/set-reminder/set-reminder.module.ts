import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SetReminderPageRoutingModule } from './set-reminder-routing.module';

import { SetReminderPage } from './set-reminder.page';
import { Geolocation } from '@ionic-native/geolocation/ngx'
import { Camera } from '@ionic-native/camera/ngx';
import { FileTransfer} from '@ionic-native/file-transfer/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SetReminderPageRoutingModule,
    // Geolocation
  ],
  declarations: [SetReminderPage],
  providers: [Geolocation, Camera, FileTransfer]
})
export class SetReminderPageModule {}
