import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { BaseComponent } from './base/base.component';

@NgModule({
  imports: [CommonModule, SharedModule, HomeRoutingModule],
  declarations: [BaseComponent],
})
export class HomeModule {}
