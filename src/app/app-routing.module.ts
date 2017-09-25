import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeRoutingModule } from './home/home-routing.module';
import { HelpRoutingModule } from './help/help-routing.module';

const routes = [
  {
    path: 'lazy',
    loadChildren: './lazy/lazy.module#LazyModule',
  },
];

@NgModule({
  imports: [
    HomeRoutingModule,
    HelpRoutingModule,
    RouterModule.forRoot(routes, { enableTracing: true }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
