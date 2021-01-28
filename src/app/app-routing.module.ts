import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SignalsComponent} from './components/signals/signals.component';
import {SignalDetailsComponent} from './components/signal-details/signal-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'signals', pathMatch: 'full' },
  { path: 'signals', component: SignalsComponent},
  { path: 'signal-details', component: SignalDetailsComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
