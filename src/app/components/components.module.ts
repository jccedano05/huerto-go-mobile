import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { HeaderComponent } from './header/header.component';
import { InputComponent } from './input/input.component';
import { InputSelectComponent } from './input-select/input-select.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { InputSelectReactiveComponent } from './input-select-reactive/input-select-reactive.component';
import { CaptchaComponent } from './captcha/captcha.component';
import { RecaptchaFormsModule, RecaptchaModule } from 'ng-recaptcha';
import { NgxCaptchaModule } from 'ngx-captcha';
import { ButtonHuertoGoComponent } from './button-huerto-go/button-huerto-go.component';
import { CardComponent } from './card/card.component';
import { CardBarComponent } from './card/card-bar/card-bar.component';
import { CardHeaderComponent } from './card/card-header/card-header.component';
import { CardBodyComponent } from './card/card-body/card-body.component';
import { LoginInsideToolbarComponent } from './login-inside-toolbar/login-inside-toolbar.component';
import { SectionListComponent } from './section-list/section-list.component';
import { CartProductCardComponent } from './cards/cart-product-card/cart-product-card.component';
import { ListProductsXscrollComponent } from './list-products-xscroll/list-products-xscroll.component';
import { RecipeCardComponent } from './cards/recipe-card/recipe-card.component';
import { SelectButtonWithIconComponent } from './select-button-with-icon/select-button-with-icon.component';
import { HeadBarProfileComponent } from './head-bar-profile/head-bar-profile.component';
import { AccountComponent } from './profileUser/account/account.component';
import { AddressDeliveryComponent } from './profileUser/address-delivery/address-delivery.component';
import { PersonalDataComponent } from './profileUser/personal-data/personal-data.component';
import { LastOrdersComponent } from './last-orders/last-orders.component';
import { ActualOrderComponent } from './actual-order/actual-order.component';
import { CouponsComponent } from './coupons/coupons.component';
import { CouponCardComponent } from './cards/coupon-card/coupon-card.component';
import { LastDeliveriesCardComponent } from './cards/last-deliveries-card/last-deliveries-card.component';


@NgModule({
  declarations: [
    HeaderComponent,
    InputComponent,
    InputSelectComponent,
    InputSelectReactiveComponent,
    CaptchaComponent,
    ButtonHuertoGoComponent,
    CardComponent,
    CardBarComponent,
    CardHeaderComponent,
    CardBodyComponent,
    LoginInsideToolbarComponent,
    SectionListComponent,
    CartProductCardComponent,
    ListProductsXscrollComponent,
    RecipeCardComponent,
    SelectButtonWithIconComponent,
    HeadBarProfileComponent,
    AccountComponent,
    AddressDeliveryComponent,
    PersonalDataComponent,
    LastOrdersComponent,
    ActualOrderComponent,
    CouponsComponent,
    CouponCardComponent,
    LastDeliveriesCardComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
    RecaptchaModule,
    RecaptchaFormsModule,
    NgxCaptchaModule,
    FormsModule
  ],
  exports:[
    HeaderComponent,
    InputComponent,
    InputSelectComponent,
    InputSelectReactiveComponent,
    CaptchaComponent,
    ButtonHuertoGoComponent,
    CardComponent,
    LoginInsideToolbarComponent,
    SectionListComponent,
    CartProductCardComponent,
    ListProductsXscrollComponent,
    RecipeCardComponent,
    SelectButtonWithIconComponent,
    HeadBarProfileComponent,
    AccountComponent,
    AddressDeliveryComponent,
    PersonalDataComponent,
    LastOrdersComponent,
    ActualOrderComponent,
    CouponsComponent

  ]
})
export class ComponentsModule { }
