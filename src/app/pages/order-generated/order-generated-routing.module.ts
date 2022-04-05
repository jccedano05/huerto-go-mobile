import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderGeneratedPage } from './order-generated.page';

const routes: Routes = [
  {
    path: '',
    component: OrderGeneratedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderGeneratedPageRoutingModule {}
