import { Component, OnInit } from '@angular/core'
import { RejectedRequestsMockup } from 'src/app/shared/mockups/rejected-requests.mockup'
import { CreditRequestModel } from 'src/app/shared/models/credit-request'
import { CreditStatusEnum } from 'src/app/shared/enums/credit-status.enum'
import { UserModel } from 'src/app/shared/models/user'
import { UsersMockup } from 'src/app/shared/mockups/users.mockup'
import { PaymentCreditEnum } from 'src/app/shared/enums/paymentcredit.enum'
import { CreditRequestService } from 'src/app/shared/services/credit-request/credit-request.service'

@Component({
  selector: 'app-rejected-requests',
  templateUrl: './rejected-requests.component.html',
  styleUrls: ['./rejected-requests.component.scss']
})
export class RejectedRequestsComponent implements OnInit {
  rejectedRequests: CreditRequestModel[]

  constructor(private creditRequestService: CreditRequestService) {}

  ngOnInit() {
    this.initRejectedRequest()
  }

  /** Init rejected requests */
  initRejectedRequest() {
    this.creditRequestService.getAll().subscribe(requesResult => {
      this.rejectedRequests = requesResult.creditRequests
      return
    })
  }

  /** Credit Status Approved */
  creditStatusApproved() {
    return CreditStatusEnum.approved
  }

  /** Credit Status Reject */
  creditStatusRejected() {
    return CreditStatusEnum.rejected
  }

  /** Payment Credit Yes */
  paymentCreditYes() {
    return PaymentCreditEnum.yes
  }

  /** Payment Credit No */
  paymentCreditNo() {
    return PaymentCreditEnum.no
  }
}
