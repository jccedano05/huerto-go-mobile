import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PayAndOrderPage } from './pay-and-order.page';

const routes: Routes = [
  {
    path: '',
    component: PayAndOrderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PayAndOrderPageRoutingModule {}
