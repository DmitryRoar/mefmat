import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http'
import {Injectable} from '@angular/core'
import {Observable} from 'rxjs'

import {AuthService} from '../services/auth.service'
import {tap} from 'rxjs/operators'

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(
    private readonly authService: AuthService
  ) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.authService.isAuth) {
      req = req.clone({
        setParams: {
          Authorization: `Bearer ${this.authService.isAuth}`
        }
      })
    }
    return next.handle(req)
  }
}
