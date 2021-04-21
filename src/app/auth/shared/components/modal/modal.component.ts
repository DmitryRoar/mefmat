import {Component, Input, OnInit} from '@angular/core'

import {IModal} from '../../interfaces/modal.interface'
import {FormControl, FormGroup, Validators} from '@angular/forms'

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input() modal: IModal

  form: FormGroup

  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
      confirmPassword: new FormControl('', [Validators.required]),
      username: new FormControl('', [Validators.required])
    })
  }

  onSubmit(type: string) {
    const {email, password, confirmPassword, username} = this.form.value

    switch (type) {
      case 'model': {
        console.log('hello')
      }
    }
    const query = `
      mutation(email: "${email}", password: "${password}", username: "${username}") {

      }
    `
  }
}
