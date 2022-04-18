import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfileUserPageRoutingModule } from './profile-user-routing.module';

import { ProfileUserPage } from './profile-user.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfileUserPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ProfileUserPage]
})
export class ProfileUserPageModule {}
