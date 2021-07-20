import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingPageComponent } from './landing-page/landing-page.component';
import { ManaManatTuPageComponent } from './mana-manat-tu-page/mana-manat-tu-page.component';
import {BhaktiRangComponent} from './bhakti-rang/bhakti-rang.component';

const routes: Routes = [
  { path: 'landing', component: LandingPageComponent },
  { path: 'manaManatTu', component: ManaManatTuPageComponent },
  { path: 'bhaktiRang', component: BhaktiRangComponent },
  { path: '', pathMatch: 'full', redirectTo: 'landing'  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
