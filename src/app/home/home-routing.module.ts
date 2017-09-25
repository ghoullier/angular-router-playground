import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BaseComponent } from './base/base.component';

import { SharedModule } from './../shared/shared.module';

const routes: Routes = [
  {
    path: 'home',
    component: BaseComponent,
    children: [
      {
        path: 'lazy',
        loadChildren: '../lazy/lazy.module#LazyModule',
      },
      {
        path: 'shared',
        loadChildren: () => SharedModule,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
