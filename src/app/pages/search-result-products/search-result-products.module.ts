import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchResultProductsPageRoutingModule } from './search-result-products-routing.module';

import { SearchResultProductsPage } from './search-result-products.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchResultProductsPageRoutingModule,
    ComponentsModule
  ],
  declarations: [SearchResultProductsPage]
})
export class SearchResultProductsPageModule {}
