import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PayAndOrderPageRoutingModule } from './pay-and-order-routing.module';

import { PayAndOrderPage } from './pay-and-order.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PayAndOrderPageRoutingModule,
    ComponentsModule
  ],
  declarations: [PayAndOrderPage]
})
export class PayAndOrderPageModule {}
