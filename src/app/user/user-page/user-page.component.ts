import {Component, OnInit} from '@angular/core'

import {UserService} from '../shared/services/user.service'

import {IUser} from '../shared/interfaces/user.interface'

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {
  user: IUser

  constructor(
    private readonly userService: UserService,
  ) {
  }

  ngOnInit(): void {
    this.user = this.userService.getUser()
  }
}
