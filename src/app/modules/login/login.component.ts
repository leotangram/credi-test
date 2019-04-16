import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { AuthService } from 'src/app/shared/services/auth/auth.service'
import { UserModel } from 'src/app/shared/models/user'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide = true
  user: UserModel

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {
    this.initUser()
  }

  /** Init User */
  initUser() {
    this.user = {
      email: null,
      password: null
    }
  }

  /** Go to CreditRequest */
  goToCreditRequest() {
    this.router.navigate(['../credit-request'])
    return
  }

  /** Init Session */
  login() {
    this.user
    this.authService.login(this.user).subscribe(requesResult => {
      if (requesResult.user) {
        localStorage.setItem('session', JSON.stringify(requesResult.user))
        localStorage.setItem('token', JSON.stringify(requesResult.token))
        this.goToCreditRequest()
      }
      return
    })
  }
}
