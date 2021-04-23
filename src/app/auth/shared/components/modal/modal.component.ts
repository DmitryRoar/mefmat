import {Component, Input, OnInit} from '@angular/core'
import {Router} from '@angular/router'

import {FormControl, FormGroup, Validators} from '@angular/forms'
import {AuthService} from '../../services/auth.service'

import {IModal, ModalTypes} from '../../interfaces/modal.interface'

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
        console.log('login')
        const query = `
        query {
          authorizeUser(query: {username: "${email}", password: "${password}"}) {
            result {session {token}}
          }
        }
        `
        this.authService.authorizeUser(query).subscribe((result) => {
          this.router.navigate(['/', 'user', result.data.authorizeUser.result.session.token])
        })
      }
        break
      case 'register': {
        console.log('register')
        const query = `
          mutation{
            registerUser(command: {email: "${email}", password: "${password}", username:"${email}"}) {
              success
            }
          }
        `
        this.authService.createUser(query).subscribe((result) => {
          console.log(result.data.registerUser.success)
          this.router.navigate(['/', 'auth', 'sign-in'])
        })
      }
        break
    }
  }
}
