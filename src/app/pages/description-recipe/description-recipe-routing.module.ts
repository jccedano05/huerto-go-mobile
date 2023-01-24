import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DescriptionRecipePage } from './description-recipe.page';

const routes: Routes = [
  {
    path: '',
    component: DescriptionRecipePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DescriptionRecipePageRoutingModule {}
