import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RejectedRequestsComponent } from './rejected-requests.component';

const routes: Routes = [
  { path: '', component: RejectedRequestsComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RejectedRequestsRoutingModule { }
