import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { RejectedRequestsRoutingModule } from './rejected-requests-routing.module'
import { RejectedRequestsComponent } from './rejected-requests.component'
import { SharedModule } from 'src/app/shared/shared.module'

@NgModule({
  declarations: [RejectedRequestsComponent],
  imports: [CommonModule, RejectedRequestsRoutingModule, SharedModule]
})
export class RejectedRequestsModule {}
