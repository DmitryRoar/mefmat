import { Component, OnInit } from '@angular/core';

import {IModal} from '../shared/interfaces/modal.interface'
import {rootDir} from '../shared/utils/root-dir.util'

@Component({
  selector: 'app-register-model-page',
  templateUrl: './register-model-page.component.html',
  styleUrls: ['./register-model-page.component.scss']
})
export class RegisterModelPageComponent implements OnInit {
  modal: IModal = {
    type: 'model',
    confirmPassword: true,
    desc: [
      {
        text: 'Up to 60% of profit',
        img: rootDir('auth', 'money', 'svg')
      },
      {
        text: 'Two-week website promotion for new models',
        img: rootDir('auth', 'rocket', 'svg')
      },
      {
        text: '$ 24,000 raffled off every month',
        img: rootDir('auth', 'crown', 'svg')
      },
      {
        text: 'Easily block any country or state',
        img: rootDir('auth', 'block', 'svg')
      }
    ]
  }

  constructor() { }

  ngOnInit(): void {
  }

}
