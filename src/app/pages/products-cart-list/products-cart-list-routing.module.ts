import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsCartListPage } from './products-cart-list.page';

const routes: Routes = [
  {
    path: '',
    component: ProductsCartListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsCartListPageRoutingModule {}
