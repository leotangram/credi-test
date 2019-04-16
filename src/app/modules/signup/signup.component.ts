import { Router } from '@angular/router'
import { Component, OnInit } from '@angular/core'
import { AuthService } from 'src/app/shared/services/auth/auth.service'
import { UserModel } from 'src/app/shared/models/user'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  hide = true
  user: UserModel

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {
    this.initUser()
  }

  /** Init User */
  initUser() {
    this.user = {
      name: null,
      email: null,
      numberIdentification: null,
      password: null,
      suitable: 0
    }
  }

  /** Init User */
  signup() {
    this.authService.signup(this.user).subscribe(requesResult => {
      console.log(requesResult)
      if (requesResult.token) {
        const user: UserModel = {
          email: this.user.email,
          password: this.user.password
        }
        this.login(user)
      }
      return
    })
  }

  /** Init Session */
  login(user) {
    this.authService.login(this.user).subscribe(requesResult => {
      if (requesResult.user) {
        localStorage.setItem('session', JSON.stringify(requesResult.user))
        localStorage.setItem('token', JSON.stringify(requesResult.token))
        this.goToCreditRequest()
      }
      return
    })
  }

  /** Go to CreditRequest */
  goToCreditRequest() {
    this.router.navigate(['../credit-request'])
    return
  }
}
