import { CreditStatusEnum } from './../../shared/enums/credit-status.enum'
import { CreditRequestModel } from './../../shared/models/credit-request'
import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-credit-request',
  templateUrl: './credit-request.component.html',
  styleUrls: ['./credit-request.component.scss']
})
export class CreditRequestComponent implements OnInit {
  creditRequest: CreditRequestModel
  max: number = 1000000
  min: number = 100000
  value: number = 250000
  minDate = new Date()
  maxDate = new Date()
  date = new Date()

  constructor() {}

  ngOnInit() {
    this.maxMinDate()
    this.initRequestCredit()
  }

  /** Max and min Date */
  maxMinDate() {
    var numberOfDaysToAdd = 4
    this.minDate.setDate(this.minDate.getDate() + numberOfDaysToAdd)
    var numberOfMonthsToAdd = 1
    this.maxDate.setMonth(this.maxDate.getMonth() + numberOfMonthsToAdd)
    this.date = this.maxDate
  }

  /** Init Request Credit */
  initRequestCredit() {
    this.creditRequest = {
      requestedValue: this.value,
      dateToPay: this.date,
      creditStatus: 0,
      paymentCredit: 0
    }
  }

  /** Request a Credit */
  makeRequestCredit() {
    const stateCreditStatus = Math.round(Math.random())
    this.creditRequest = {
      requestedValue: this.value,
      dateToPay: this.date,
      creditStatus: stateCreditStatus,
      paymentCredit: 1
    }
    console.log(this.creditRequest)
  }

  /** Credit Status */
  creditStatusApproved() {
    return CreditStatusEnum.approved
  }

  /** Credit Status */
  creditStatusRejected() {
    return CreditStatusEnum.rejected
  }
}
