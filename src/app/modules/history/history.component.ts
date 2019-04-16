import { Component, OnInit } from '@angular/core'
import { CreditRequestModel } from 'src/app/shared/models/credit-request'
import { CreditRequestService } from 'src/app/shared/services/credit-request/credit-request.service'
import { CreditStatusEnum } from 'src/app/shared/enums/credit-status.enum'
import { PaymentCreditEnum } from 'src/app/shared/enums/paymentcredit.enum'

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  session: any
  historyRequests: CreditRequestModel[]

  constructor(private creditRequestService: CreditRequestService) {}

  ngOnInit() {
    this.historyRequests = []
    this.initSession()
    this.initRejectedRequest()
  }

  /** Init Session */
  initSession() {
    this.session = JSON.parse(localStorage.getItem('session'))
  }

  /** Init rejected requests */
  initRejectedRequest() {
    this.creditRequestService.getAll().subscribe(requesResult => {
      const requests: CreditRequestModel[] = requesResult.creditRequests
      for (const request of requests) {
        if (request.userIdNumber === this.session.numberIdentification) {
          this.historyRequests.push(request)
        }
      }

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
