import {Component, OnInit} from '@angular/core'
import {FormControl, FormGroup, Validators} from '@angular/forms'
import {Router} from '@angular/router'

import Swal from 'sweetalert2'

import {UserService} from '../shared/services/user.service'

import {StorageEnum} from '../../shared/enums/storage.enum'

import {IUser} from '../shared/interfaces/user.interface'

@Component({
  selector: 'app-settings-page',
  templateUrl: './settings-page.component.html',
  styleUrls: ['./settings-page.component.scss']
})
export class SettingsPageComponent implements OnInit {
  form: FormGroup
  user: IUser

  disabledButton = false


  constructor(
    private readonly userService: UserService,
    private router: Router
  ) {
  }

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
      Swal.fire('Пароли Должны совпадать', '', 'error')
      this.disabledButton = false
      return
    }

    const data = {
      oldPassword: password,
      newPassword: newPassword
    }

    this.userService.changePassword(data).subscribe((data) => {
      if (!data.data) {
        Swal.fire('Что-то пошло не так', 'Попробуйте попытку позже', 'error')
      }
      this.disabledButton = false
    }, () => {
      this.disabledButton = false
    })
  }

  verifyEmailNavigate() {
    this.disabledButton = true
    this.router.navigate(['/user', 'settings', 'email', 'verify'], {
      queryParams: {
        verifyToken: localStorage.getItem(StorageEnum.userSession) || 'hello'
      }
    })
    this.disabledButton = false
  }
}
