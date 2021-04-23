import {Component, OnInit} from '@angular/core'
import {ActivatedRoute, Router} from '@angular/router'

import {IVerifyParams} from '../shared/interfaces/verify.interface'
import {switchMap} from 'rxjs/operators'
import {UserService} from '../shared/services/user.service'

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
    ).subscribe(() => {
      this.router.navigate(['/user', 'id'])
    })
  }
}
