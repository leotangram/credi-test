import { CreditStatusEnum } from './../../shared/enums/credit-status.enum'
import { UserModel } from './../../shared/models/user'
import { CreditsRequestsMockup } from './../../shared/mockups/credits-requests.mockup'
import { CreditRequestModel } from './../../shared/models/credit-request'
import { Component, OnInit } from '@angular/core'
import { UserMockup } from 'src/app/shared/mockups/user.mockup'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  user: UserModel
  creditsRequests: CreditRequestModel[]

  constructor() {}

  ngOnInit() {
    this.initUser()
    this.initCreditsRequests()
  }

  /** Init User */
  initUser() {
    this.user = UserMockup
  }

  /** init Credits Requests */
  initCreditsRequests() {
    this.creditsRequests = CreditsRequestsMockup
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
