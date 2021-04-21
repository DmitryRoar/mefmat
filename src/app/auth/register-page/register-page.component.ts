import {Component, OnInit} from '@angular/core'

import {IModal} from '../shared/interfaces/modal.interface'
import {rootDir} from '../shared/utils/root-dir.util'

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {
  modal: IModal = {
    type: 'register',
    confirmPassword: true,
    desc: [
      {
        text: 'Chat live',
        img: rootDir('auth', 'chat', 'svg')
      },
      {
        text: 'Save your favorite models',
        img: rootDir('auth', 'heart', 'svg')
      },
      {
        text: 'Viewing in VR mode',
        img: rootDir('auth', 'vr', 'svg')
      },
      {
        text: 'Reward Models',
        img: rootDir('auth', 'flower', 'svg')
      }
    ]
  }

  constructor() {
  }

  ngOnInit(): void {
  }
}
