import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DiscountCouponPage } from './discount-coupon.page';

const routes: Routes = [
  {
    path: '',
    component: DiscountCouponPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiscountCouponPageRoutingModule {}
