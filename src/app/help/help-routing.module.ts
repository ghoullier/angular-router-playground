import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BaseComponent } from './base/base.component';

const routes: Routes = [
  {
    path: 'help',
    component: BaseComponent,
    children: [
      {
        path: 'lazy',
        loadChildren: '../lazy/lazy.module#LazyModule',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), SharedModule],
  exports: [RouterModule],
})
export class HelpRoutingModule {}
