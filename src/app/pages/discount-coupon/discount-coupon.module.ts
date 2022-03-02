import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DiscountCouponPageRoutingModule } from './discount-coupon-routing.module';

import { DiscountCouponPage } from './discount-coupon.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DiscountCouponPageRoutingModule,
    ComponentsModule
  ],
  declarations: [DiscountCouponPage]
})
export class DiscountCouponPageModule {}
