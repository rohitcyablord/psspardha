import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingPageComponent } from './landing-page/landing-page.component';
import { ManaManatTuPageComponent } from './mana-manat-tu-page/mana-manat-tu-page.component';

const routes: Routes = [
  { path: 'landing', component: LandingPageComponent },
  { path: 'manaManatTu', component: ManaManatTuPageComponent },
  { path: '', pathMatch: 'full', redirectTo: 'manaManatTu'  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
