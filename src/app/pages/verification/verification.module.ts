import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerificationPageRoutingModule } from './verification-routing.module';

import { VerificationPage } from './verification.page';
import { NgOtpInputModule } from 'ng-otp-input';

// 
import { IonicStorageModule } from '@ionic/storage-angular';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgOtpInputModule,
    VerificationPageRoutingModule,
    IonicStorageModule.forRoot()
  ],
  declarations: [VerificationPage]
})
export class VerificationPageModule {}
