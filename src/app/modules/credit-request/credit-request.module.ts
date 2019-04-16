import { SharedModule } from 'src/app/shared/shared.module'
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { CreditRequestRoutingModule } from './credit-request-routing.module'
import { CreditRequestComponent } from './credit-request.component'

@NgModule({
  declarations: [CreditRequestComponent],
  imports: [CommonModule, CreditRequestRoutingModule, SharedModule]
})
export class CreditRequestModule {}
