import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { CreditPendingComponent } from './credit-pending.component'

const routes: Routes = [
  { path: '', component: CreditPendingComponent },
  { path: '**', redirectTo: '' }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreditPendingRoutingModule {}
