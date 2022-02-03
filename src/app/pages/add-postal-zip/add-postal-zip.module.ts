import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddPostalZipPageRoutingModule } from './add-postal-zip-routing.module';

import { AddPostalZipPage } from './add-postal-zip.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddPostalZipPageRoutingModule,
    ComponentsModule
  ],
  declarations: [AddPostalZipPage]
})
export class AddPostalZipPageModule {}
