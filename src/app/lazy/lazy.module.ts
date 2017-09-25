import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyRoutingModule } from './lazy-routing.module';
import { BaseComponent } from './base/base.component';

@NgModule({
  imports: [
    CommonModule,
    LazyRoutingModule
  ],
  declarations: [BaseComponent]
})
export class LazyModule { }
