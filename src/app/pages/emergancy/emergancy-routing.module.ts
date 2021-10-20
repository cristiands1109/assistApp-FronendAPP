import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmergancyPage } from './emergancy.page';

const routes: Routes = [
  {
    path: '',
    component: EmergancyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmergancyPageRoutingModule {}
