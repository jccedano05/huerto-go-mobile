import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductsCartListPageRoutingModule } from './products-cart-list-routing.module';

import { ProductsCartListPage } from './products-cart-list.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductsCartListPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ProductsCartListPage]
})
export class ProductsCartListPageModule {}
