import {Component, Input, OnInit} from '@angular/core'
import {Router} from '@angular/router'

import {FormControl, FormGroup, Validators} from '@angular/forms'
import {AuthService} from '../../services/auth.service'

import {IModal, ModalTypes} from '../../interfaces/modal.interface'
import {IAuthorizeUser, ICreateUser} from '../../interfaces/auth.interface'
import Swal from 'sweetalert2'

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input() modal: IModal

  form: FormGroup

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      confirmPassword: new FormControl('', [Validators.required]),
      username: new FormControl('', Validators.required)
    })
  }

  onSubmit(type: ModalTypes) {
    const {email, password, confirmPassword} = this.form.value

    switch (type) {
      case 'model': {
        console.log('model')
      }
        break
      case 'login': {
        const data: IAuthorizeUser = {
          email,
          password
        }
        this.authService.authorizeUser(data).subscribe((result) => {
          this.router.navigate(['/', 'user', result.data.authorizeUser.result.session.token])
        })
      }
        break
      case 'register': {
        const data: ICreateUser = {
          email,
          password,
          username: email
        }
        this.authService.createUser(data).subscribe((d) => {
          this.router.navigate(['/', 'auth', 'sign-in'])
        })
      }
        break
    }
  }
}
