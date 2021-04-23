import {Injectable} from '@angular/core'
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {Observable} from 'rxjs'
import {tap} from 'rxjs/operators'

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
        tap(this.setToken)
      )
  }

  logout(query: string): Observable<any> {
    return this.http.post<any>(`${environment.serverUrl}`, {query})
  }

  private setToken(response: IAuthorizeUser | null) {
    const token = response.data.authorizeUser.result.session.token
    const headers = new HttpHeaders();
    if (token) {
      headers.set('Authorization', token)
    }
    console.log(headers)
  }
}
