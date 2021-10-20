import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PharmacyPage } from './pharmacy.page';

const routes: Routes = [
  {
    path: '',
    component: PharmacyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PharmacyPageRoutingModule {}
