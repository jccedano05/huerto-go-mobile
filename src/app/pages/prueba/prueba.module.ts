import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PruebaPageRoutingModule } from './prueba-routing.module';

import { PruebaPage } from './prueba.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PruebaPageRoutingModule,
    ComponentsModule
  ],
  declarations: [PruebaPage]
})
export class PruebaPageModule {}
