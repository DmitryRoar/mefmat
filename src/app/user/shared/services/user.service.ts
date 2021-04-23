import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'

import {IUser} from '../interfaces/user.interface'

import {environment} from '../../../../environments/environment'
import {Observable} from 'rxjs'

@Injectable()
export class UserService {
  constructor(private http: HttpClient) {
  }

  getUser(): IUser {
    return {
      balance: '1000',
      country: 'Russia',
      name: 'Dmitry Roar',
      img: '/assets/img/mock/ph2.png',
      status: 'Online',
      rank: '100',
      about: 'Hello',
      owner: true,
      subscribers: [
        {
          img: '/assets/img/mock/ph2.png',
          url: '/'
        },
        {
          img: '/assets/img/mock/ph2.png',
          url: '/'
        },
        {
          img: '/assets/img/mock/ph2.png',
          url: '/'
        },
        {
          img: '/assets/img/mock/ph2.png',
          url: '/'
        },
        {
          img: '/assets/img/mock/ph2.png',
          url: '/'
        },
        {
          img: '/assets/img/mock/ph2.png',
          url: '/'
        },
        {
          img: '/assets/img/mock/ph2.png',
          url: '/'
        },
        {
          img: '/assets/img/mock/ph2.png',
          url: '/'
        },
        {
          img: '/assets/img/mock/ph2.png',
          url: '/'
        }
      ]
    }
  }

  verifyEmail(query: string): Observable<any> {
    return this.http.post(`${environment.serverUrl}`, {query})
  }

  changePassword(query: string): Observable<any> {
    return this.http.post(`${environment.serverUrl}`, {query})
  }
}
