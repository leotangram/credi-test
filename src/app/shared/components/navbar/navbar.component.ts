import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  session = false
  constructor(private router: Router) {}

  ngOnInit() {
    if (localStorage.getItem('token')) {
      this.session = true
      return
    }
    this.session = false
  }

  /** Logout */
  logout() {
    console.log('logout')
    localStorage.removeItem('token')
    localStorage.removeItem('session')
    this.goToLogin()
  }

  /** Go to Login */
  goToLogin() {
    this.router.navigate(['../login'])
    return
  }

  /** Go to CreditRequest */
  goToCreditRequest() {
    this.router.navigate(['../credit-request'])
    return
  }

  /** Go to CreditRequest */
  goToRejectedRequests() {
    this.router.navigate(['../rejected-requests'])
    return
  }

  /** Go to CreditPending */
  goToCreditPending() {
    this.router.navigate(['../credit-pending'])
    return
  }

  /** Go to goToUsers() */
  goToHistory() {
    this.router.navigate(['../history'])
    return
  }
}
