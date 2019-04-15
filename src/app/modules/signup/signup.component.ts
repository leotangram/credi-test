import { Router } from '@angular/router'
import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  hide = true

  constructor(private router: Router) {}

  ngOnInit() {}

  /** Go to CreditRequest */
  goToCreditRequest() {
    this.router.navigate(['../credit-request'])
    return
  }
}
