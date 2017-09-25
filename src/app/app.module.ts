import { AppRoutingModule } from './app-routing.module';
import { HelpModule } from './help/help.module';
import { HomeModule } from './home/home.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [AppRoutingModule, HomeModule, HelpModule, BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
