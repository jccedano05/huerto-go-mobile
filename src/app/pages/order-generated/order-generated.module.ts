import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrderGeneratedPageRoutingModule } from './order-generated-routing.module';

import { OrderGeneratedPage } from './order-generated.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrderGeneratedPageRoutingModule
  ],
  declarations: [OrderGeneratedPage]
})
export class OrderGeneratedPageModule {}
