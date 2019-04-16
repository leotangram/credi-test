import { Component, OnInit } from '@angular/core'
import { CreditRequestModel } from 'src/app/shared/models/credit-request'
import { ApprovedRequestsMockup } from 'src/app/shared/mockups/approved-requests.mockup'
import { CreditStatusEnum } from 'src/app/shared/enums/credit-status.enum'
import { PaymentCreditEnum } from 'src/app/shared/enums/paymentcredit.enum'
import { CreditRequestService } from 'src/app/shared/services/credit-request/credit-request.service'

@Component({
  selector: 'app-credit-pending',
  templateUrl: './credit-pending.component.html',
  styleUrls: ['./credit-pending.component.scss']
})
export class CreditPendingComponent implements OnInit {
  creditsPending: CreditRequestModel[]
  creditPending: CreditRequestModel

  constructor(private creditRequestService: CreditRequestService) {}

  ngOnInit() {
    this.initCreditPending()
  }

  /** Init Credit Pending */
  initCreditPending() {
    this.creditRequestService.getAll().subscribe(requesResult => {
      this.creditsPending = requesResult.creditRequests
      return
    })
  }

  /** Update Credit Pending */
  updateCreditPending(creditPending) {
    this.creditPending = creditPending
    this.creditPending.paymentCredit = 0
    this.creditRequestService
      .update(this.creditPending)
      .subscribe(requesResult => {
        this.creditsPending = requesResult.creditRequests
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
