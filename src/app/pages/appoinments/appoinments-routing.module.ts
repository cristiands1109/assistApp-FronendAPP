import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppoinmentsPage } from './appoinments.page';

const routes: Routes = [
  {
    path: '',
    component: AppoinmentsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppoinmentsPageRoutingModule {}
