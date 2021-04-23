import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http'
import {Router} from '@angular/router'
import {Injectable} from '@angular/core'
import {Observable, throwError} from 'rxjs'
import {catchError} from 'rxjs/operators'

import {AuthService} from '../services/auth.service'

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(
    private readonly authService: AuthService,
    private router: Router
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
      .pipe(
        catchError((error: HttpErrorResponse) => {
          if (error.status === 401) {
            this.router.navigate(['/auth', 'sign-in'], {
              queryParams: {
                authFailed: true
              }
            })
          }

          return throwError(error)
        })
      )
  }
}
