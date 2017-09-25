import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HelpRoutingModule } from './help-routing.module';
import { BaseComponent } from './base/base.component';

@NgModule({
  imports: [CommonModule, SharedModule, HelpRoutingModule],
  declarations: [BaseComponent],
})
export class HelpModule {}
