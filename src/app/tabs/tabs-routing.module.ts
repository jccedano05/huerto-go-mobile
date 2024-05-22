import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import { UserGuard } from '../guards/user.guard';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab0',
        loadChildren: () =>
          import('../tab0/tab0.module').then((m) => m.Tab0PageModule),
        // canLoad: [UserGuard]
      },
      {
        path: 'tab1',
        loadChildren: () =>
          import('../tab1/tab1.module').then((m) => m.Tab1PageModule),
        // canLoad: [UserGuard]
      },
      {
        path: 'tab2',
        loadChildren: () =>
          import('../tab2/tab2.module').then((m) => m.Tab2PageModule),
        // canLoad: [UserGuard]
      },
      {
        path: 'tab3',
        loadChildren: () =>
          import('../tab3/tab3.module').then((m) => m.Tab3PageModule),
        // canLoad: [UserGuard]
      },
      {
        path: 'tab4',
        loadChildren: () =>
          import('../tab4/tab4.module').then((m) => m.Tab4PageModule),
        // canLoad: [UserGuard]
      },
      {
        path: 'search-result-products',
        // eslint-disable-next-line max-len
        loadChildren: () =>
          import(
            '../../app/pages/search-result-products/search-result-products.module'
          ).then((m) => m.SearchResultProductsPageModule),
        // canLoad: [UserGuard]
      },
      {
        path: '',
        redirectTo: '/tabs/tab0',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/tab0',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
