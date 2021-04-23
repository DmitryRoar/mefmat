import {Component, OnInit} from '@angular/core'
import {UserService} from '../shared/services/user.service'
import {IUser} from '../shared/interfaces/user.interface'
import {FormControl, FormGroup, Validators} from '@angular/forms'
import {StorageEnum} from '../../shared/enums/storage.enum'
import {Router} from '@angular/router'

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {
  form: FormGroup
  user: IUser

  disabledButton = false

  constructor(
    private readonly userService: UserService,
    private router: Router
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
    this.disabledButton = true
    const {password, newPassword, repeatNewPassword} = this.form.value
    if (newPassword !== repeatNewPassword) {
      return
    }

    const query = `
      mutation {
        changeUserPassword(command: {oldPassword: "${password}", newPassword: "${newPassword}"}) {
            errorMessage
        }
      }
    `
    this.userService.changePassword(query).subscribe(() => {
      this.disabledButton = false
    }, () => {
      this.disabledButton = false
    })
  }

  verifyEmailNavigate() {
    this.router.navigate(['/user', 'email', 'verify'], {
      queryParams: {
        verifyToken: localStorage.getItem(StorageEnum.userSession) || 'hello'
      }
    })
  }
}
