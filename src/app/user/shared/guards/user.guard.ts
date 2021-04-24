import {Injectable} from '@angular/core'
import {ActivatedRouteSnapshot, CanActivateChild, Router, RouterStateSnapshot} from '@angular/router'
import {Observable} from 'rxjs'

import {AuthService} from '../../../auth/shared/services/auth.service'

@Injectable()
export class UserGuard implements CanActivateChild {
  constructor(
    private readonly authService: AuthService,
    private router: Router
  ) {
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<boolean> | Promise<boolean> | boolean {
    if (this.authService.isAuth) {
      return true
    } else {
      this.router.navigate(['/auth', 'sign-in'], {
        queryParams: {
          authorize: false
        }
      })
      return false
    }
  }
}
