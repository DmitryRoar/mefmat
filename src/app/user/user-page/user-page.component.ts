import {Component, OnInit} from '@angular/core'
import {UserService} from '../shared/services/user.service'
import {IUser} from '../shared/interfaces/user.interface'
import {FormControl, FormGroup, Validators} from '@angular/forms'

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {
  form: FormGroup
  user: IUser

  constructor(
    private readonly userService: UserService
  ) {}

  ngOnInit(): void {
    this.user = this.userService.getUser()
    this.form = new FormGroup({
      password: new FormControl('', Validators.required),
      newPassword: new FormControl('', Validators.required),
      repeatNewPassword: new FormControl('', Validators.required)
    })
  }

  onSubmit() {
    const {password, newPassword, repeatNewPassword} = this.form.value
    if (newPassword !== repeatNewPassword) {
      return
    }

    const query = `
      mutation{
        changeUserPassword(command: {oldPassword: "${password}", newPassword: "${newPassword}"}) {
          result {session {token}}
        }
      }
    `
    this.userService.changePassword(query).subscribe()
  }
}
