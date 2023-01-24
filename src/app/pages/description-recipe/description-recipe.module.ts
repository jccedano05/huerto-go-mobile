import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DescriptionRecipePageRoutingModule } from './description-recipe-routing.module';

import { DescriptionRecipePage } from './description-recipe.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DescriptionRecipePageRoutingModule,

    ComponentsModule,
  ],
  declarations: [DescriptionRecipePage],
})
export class DescriptionRecipePageModule {}
