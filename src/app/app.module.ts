import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { App1SharedModule } from '../../projects/app1/src/app/app.module';
import { App2SharedModule } from '../../projects/app2/src/app/app.module';

@NgModule({
  declarations: [AppComponent, NavComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    App1SharedModule,
    App2SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
