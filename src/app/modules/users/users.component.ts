import { UsersMockup } from './../../shared/mockups/users.mockup'
import { UserModel } from './../../shared/models/user'
import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: UserModel[]

  constructor() {}

  ngOnInit() {
    this.initUsers()
  }

  /** Init Users */
  initUsers() {
    this.users = UsersMockup
  }
}
