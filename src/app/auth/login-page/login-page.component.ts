import { Component, OnInit } from '@angular/core';
import {IModal} from '../shared/interfaces/modal.interface'

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  modal: IModal = {
    type: 'login',
    confirmPassword: false
  }

  constructor() { }

  ngOnInit(): void {
  }
}
