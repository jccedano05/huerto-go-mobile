import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddPostalZipPage } from './add-postal-zip.page';

const routes: Routes = [
  {
    path: '',
    component: AddPostalZipPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddPostalZipPageRoutingModule {}
