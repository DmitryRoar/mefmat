import {Injectable} from '@angular/core'
import {HttpClient, HttpErrorResponse} from '@angular/common/http'
import {Observable, throwError} from 'rxjs'
import {catchError, tap} from 'rxjs/operators'

import {StorageEnum} from '../../../shared/enums/storage.enum'

import {
  IAuthorizeUser,
  ICreateUser,
  IOutputAuthorizeUser,
  IOutputCreateUser,
  IOutputLogout
} from '../interfaces/auth.interface'

import {environment} from '../../../../environments/environment'
import Swal from 'sweetalert2'

@Injectable({providedIn: 'root'})
export class AuthService {
  constructor(private http: HttpClient) {
  }

  get isAuth(): string {
    return localStorage.getItem(StorageEnum.userSession)
  }

  createUser(data: ICreateUser): Observable<IOutputCreateUser> {
    const query = `
     mutation{
        registerUser(command: {email: "${data.email}", password: "${data.password}", username:"${data.username}"}) {
          success
        }
      }
    `
    return this.http.post<IOutputCreateUser>(`${environment.serverUrl}`, {query})
  }

  authorized(): Observable<boolean> {
    const query = `
      query {
        authorized
      }
    `
    return this.http.post<boolean>(`${environment.serverUrl}`, {query})
  }

  authorizeUser(data: IAuthorizeUser): Observable<IOutputAuthorizeUser> {
    const query = `
      query {
        authorizeUser(query: {username: "${data.email}", password: "${data.password}"}) {
          result {session {token}}
          errorMessage
        }
      }
    `
    return this.http.post<IOutputAuthorizeUser>(`${environment.serverUrl}`, {query})
      .pipe(
        tap(this.setToken),
        catchError(this.handleError.bind(this))
      )
  }

  logout(): Observable<IOutputLogout> {
    const query = `
      mutation {
        logout {
          success
          errorMessage
        }
      }
    `
    return this.http.post<IOutputLogout>(`${environment.serverUrl}`, {query})
      .pipe(
        tap(() => localStorage.clear())
      )
  }

  private setToken(response: IOutputAuthorizeUser | null) {
    localStorage.setItem(StorageEnum.userSession, 'test')
    const token = response.data.authorizeUser.result.session.token
    console.log('TOKEN: ', token)
    if (token) {
      localStorage.setItem(StorageEnum.userSession, token)
    }
  }

  private handleError(error: HttpErrorResponse) {
    Swal.fire('Что-то пошло не так', 'Попробуйте попытку позже', 'error')
    return throwError(error)
  }
}
