import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ManaManatTuPageComponent } from './mana-manat-tu-page/mana-manat-tu-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    ManaManatTuPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
