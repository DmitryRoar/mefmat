import {Component, OnInit} from '@angular/core'
import {ActivatedRoute, Router} from '@angular/router'
import {switchMap} from 'rxjs/operators'

import Swal, {SweetAlertOptions} from 'sweetalert2'

import {UserService} from '../shared/services/user.service'

import {IVerifyEmail} from '../shared/interfaces/user.interface'
import {IVerifyParams} from '../shared/interfaces/verify.interface'

@Component({
  selector: 'app-verify-page',
  templateUrl: './verify-page.component.html',
  styleUrls: ['./verify-page.component.scss']
})
export class VerifyPageComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private readonly userService: UserService
  ) {
  }

  ngOnInit(): void {
    const snapshot = this.route.snapshot.url[0].path
    this.route.queryParams.pipe(
      switchMap((params: IVerifyParams) => {
        switch (snapshot) {
          case 'email': {
            const query = `
              mutation {
                verifyEmail(command: {token: "${params.verifyToken}"}) {
                  success
                  errorMessage
                }
              }
            `
            return this.userService.verifyEmail(query)
          }
        }
      })
    ).subscribe((data: any) => {
      const swalOptions: SweetAlertOptions = {
        title: 'Верификация прошла успешно!',
        confirmButtonText: 'Вернуться на свою страницу',
        icon: 'success'
      }
      let method = ''
      switch (snapshot) {
        case 'email': method = 'verifyEmail'
          break
      }
      if (!data.data[method].success) {
        swalOptions.title = data.data[method].errorMessage
        swalOptions.icon = 'error'
      }

      Swal.fire(swalOptions).then(() => {
        this.router.navigate(['/user', 'world'])
      })
    })
  }
}
