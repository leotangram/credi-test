import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { CreditPendingRoutingModule } from './credit-pending-routing.module'
import { CreditPendingComponent } from './credit-pending.component'
import { SharedModule } from 'src/app/shared/shared.module'

@NgModule({
  declarations: [CreditPendingComponent],
  imports: [CommonModule, CreditPendingRoutingModule, SharedModule]
})
export class CreditPendingModule {}
