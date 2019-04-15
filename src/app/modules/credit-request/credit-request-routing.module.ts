import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { CreditRequestComponent } from './credit-request.component'

const routes: Routes = [
  { path: '', component: CreditRequestComponent },
  { path: '**', redirectTo: '' }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreditRequestRoutingModule {}
