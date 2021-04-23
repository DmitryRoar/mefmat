import {Injectable} from '@angular/core'
import {HttpClient, HttpErrorResponse} from '@angular/common/http'
import {Observable, throwError} from 'rxjs'
import {catchError, tap} from 'rxjs/operators'

import {StorageEnum} from '../../../shared/enums/storage.enum'

import {IAuthorizeUser, ICreateUser, IQuery} from '../interfaces/auth.interface'

import {environment} from '../../../../environments/environment'

@Injectable({providedIn: 'root'})
export class AuthService {
  constructor(private http: HttpClient) {
  }

  createUser(query: string): Observable<ICreateUser> {
    return this.http.post<ICreateUser>(`${environment.serverUrl}`, {query})
  }

  authorized(query: string): Observable<IQuery> {
    return this.http.post<IQuery>(`${environment.serverUrl}`, {query})
  }

  authorizeUser(query: string): Observable<IAuthorizeUser> {
    return this.http.post<IAuthorizeUser>(`${environment.serverUrl}`, {query})
      .pipe(
        tap(this.setToken),
        catchError(this.handleError.bind(this))
      )
  }

  logout(query: string): Observable<any> {
    return this.http.post<any>(`${environment.serverUrl}`, {query})
      .pipe(
        tap(() => localStorage.clear())
      )
  }

  get isAuth() {
    return !!localStorage.getItem(StorageEnum.userSession)
  }

  private setToken(response: IAuthorizeUser | null) {
    localStorage.setItem(StorageEnum.userSession, 'test')
    const token = response.data.authorizeUser.result.session.token
    console.log('TOKEN: ', token)
    if (token) {
      localStorage.setItem(StorageEnum.userSession, token)
    }
  }

  private handleError(error: HttpErrorResponse) {
    // alert error
    console.log('auth handle error')
    return throwError(error)
  }
}
