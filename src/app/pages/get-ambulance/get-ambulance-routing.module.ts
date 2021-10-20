import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GetAmbulancePage } from './get-ambulance.page';

const routes: Routes = [
  {
    path: '',
    component: GetAmbulancePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GetAmbulancePageRoutingModule {}
