import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchResultProductsPage } from './search-result-products.page';

const routes: Routes = [
  {
    path: '',
    component: SearchResultProductsPage
  }
]; 

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchResultProductsPageRoutingModule {}
