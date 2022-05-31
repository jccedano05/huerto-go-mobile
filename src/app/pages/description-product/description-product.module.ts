import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DescriptionProductPageRoutingModule } from './description-product-routing.module';

import { DescriptionProductPage } from './description-product.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DescriptionProductPageRoutingModule,
    ComponentsModule
  ],
  declarations: [DescriptionProductPage]
})
export class DescriptionProductPageModule {}
