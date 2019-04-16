import { CreditStatusEnum } from './../../shared/enums/credit-status.enum'
import { CreditRequestModel } from './../../shared/models/credit-request'
import { Component, OnInit } from '@angular/core'
import { CreditRequestService } from 'src/app/shared/services/credit-request/credit-request.service'
import { UserModel } from 'src/app/shared/models/user'
import { Router } from '@angular/router'
import { AuthService } from 'src/app/shared/services/auth/auth.service'

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
  session: any
  creditStatusState = 0
  user: UserModel
  requests: CreditRequestModel[]

  constructor(
    private creditRequestService: CreditRequestService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.initSession()
    this.initCreditRequests()
    this.maxMinDate()
    this.initRequestCredit()
  }

  /** Init Session */
  initSession() {
    this.session = JSON.parse(localStorage.getItem('session'))
  }

  /** Init Credit Requests */
  initCreditRequests() {
    this.creditRequestService.getAll().subscribe(requesResult => {
      this.requests = requesResult.creditRequests

      for (const request of this.requests) {
        if (request.creditStatus === 1) {
          this.creditStatusState = 2
          return
        }
        if (request.creditStatus === 0) {
          if (request.paymentCredit === 1) {
            this.creditStatusState = 1
            return
          }
          if (request.paymentCredit === 0) {
            this.creditStatusState = 0
          }
        }
      }
      return
    })
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
      paymentCredit: 0,
      name: this.session.name,
      userIdNumber: this.session.numberIdentification
    }
  }

  /** Request a Credit */
  makeRequestCredit() {
    const stateCreditStatus = Math.round(Math.random())
    this.creditRequest = {
      requestedValue: this.value,
      dateToPay: this.date,
      creditStatus: stateCreditStatus,
      paymentCredit: 1,
      name: this.creditRequest.name,
      userIdNumber: this.creditRequest.userIdNumber
    }
    this.saveCreditRequest(this.creditRequest)
  }

  /** Credit Status */
  creditStatusApproved() {
    return CreditStatusEnum.approved
  }

  /** Credit Status */
  creditStatusRejected() {
    return CreditStatusEnum.rejected
  }

  /** Save Credit Request */
  saveCreditRequest(creditRequest) {
    this.creditRequestService.save(creditRequest).subscribe(requesResult => {
      if (requesResult.creditRequest.creditStatus === 1) {
        this.creditStatusState = 2
      }
      if (requesResult.creditRequest.creditStatus === 0) {
        this.creditStatusState = 1
      }
      this.user = {
        suitable: 1,
        id: this.session.numberIdentification
      }
      // this.updateUser(this.user)
      return
    })
  }

  /** Update User */
  updateUser(user) {
    this.authService.update(user).subscribe(requesResult => {
      return
    })
  }
}
