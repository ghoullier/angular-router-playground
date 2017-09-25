import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BaseComponent } from './base/base.component';

const routes: Routes = [
  {
    path: '',
    component: BaseComponent,
  },
  {
    path: 'lazy',
    component: BaseComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LazyRoutingModule {}
