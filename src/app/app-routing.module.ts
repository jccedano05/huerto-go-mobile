import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { UserGuard } from './guards/user.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./tabs/tabs.module').then((m) => m.TabsPageModule),
  },
  {
    path: 'tabs',
    loadChildren: () =>
      import('./tabs/tabs.module').then((m) => m.TabsPageModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: 'signup',
    loadChildren: () =>
      import('./pages/signup/signup.module').then((m) => m.SignupPageModule),
  },
  {
    path: 'forgot-password',
    loadChildren: () =>
      import('./pages/forgot-password/forgot-password.module').then(
        (m) => m.ForgotPasswordPageModule
      ),
  },
  {
    path: 'welcome',
    loadChildren: () =>
      import('./pages/welcome/welcome.module').then((m) => m.WelcomePageModule),
  },
  {
    path: 'signup-form',
    loadChildren: () =>
      import('./pages/signup-form/signup-form.module').then(
        (m) => m.SignupFormPageModule
      ),
  },
  {
    path: 'prueba',
    loadChildren: () =>
      import('./pages/prueba/prueba.module').then((m) => m.PruebaPageModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: 'start-page',
    loadChildren: () =>
      import('./pages/start-page/start-page.module').then(
        (m) => m.StartPagePageModule
      ),
  },
  {
    path: 'add-postal-zip',
    loadChildren: () =>
      import('./pages/add-postal-zip/add-postal-zip.module').then(
        (m) => m.AddPostalZipPageModule
      ),
    // canLoad: [UserGuard],
  },
  {
    path: 'products-cart-list',
    loadChildren: () =>
      import('./pages/products-cart-list/products-cart-list.module').then(
        (m) => m.ProductsCartListPageModule
      ),
    // canLoad: [UserGuard],
  },
  {
    path: 'discount-coupon',
    loadChildren: () =>
      import('./pages/discount-coupon/discount-coupon.module').then(
        (m) => m.DiscountCouponPageModule
      ),
    // canLoad: [UserGuard],
  },
  {
    path: 'pay-and-order',
    loadChildren: () =>
      import('./pages/pay-and-order/pay-and-order.module').then(
        (m) => m.PayAndOrderPageModule
      ),
  },
  {
    path: 'invite-friends',
    loadChildren: () =>
      import('./pages/invite-friends/invite-friends.module').then(
        (m) => m.InviteFriendsPageModule
      ),
  },
  {
    path: 'order-generated',
    loadChildren: () =>
      import('./pages/order-generated/order-generated.module').then(
        (m) => m.OrderGeneratedPageModule
      ),
  },
  {
    path: 'pay-method',
    loadChildren: () =>
      import('./pages/pay-method/pay-method.module').then(
        (m) => m.PayMethodPageModule
      ),
  },
  {
    path: 'profile-user',
    loadChildren: () =>
      import('./pages/profile-user/profile-user.module').then(
        (m) => m.ProfileUserPageModule
      ),
  },
  {
    path: 'help',
    loadChildren: () =>
      import('./pages/help/help.module').then((m) => m.HelpPageModule),
  },
  {
    path: 'orders',
    loadChildren: () =>
      import('./pages/orders/orders.module').then((m) => m.OrdersPageModule),
  },
  {
    path: 'description-product/:id',
    loadChildren: () =>
      import('./pages/description-product/description-product.module').then(
        (m) => m.DescriptionProductPageModule
      ),
  },
  {
    path: 'description-recipe/:id',
    loadChildren: () =>
      import('./pages/description-recipe/description-recipe.module').then(
        (m) => m.DescriptionRecipePageModule
      ),
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
