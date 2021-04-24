import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'

import {IChangePassword, IOutputChangePassword, IOutputVerifyEmail, IUser} from '../interfaces/user.interface'

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

  verifyEmail(token: string): Observable<IOutputVerifyEmail> {
    const query = `
        mutation {
          verifyEmail(command: {token: "${token}"}) {
          success
          errorMessage
        }
      }
    `
    return this.http.post<IOutputVerifyEmail>(`${environment.serverUrl}`, {query})
  }

  changePassword(data: IChangePassword): Observable<IOutputChangePassword> {
    const query = `
      mutation {
        changeUserPassword(command: {oldPassword: "${data.oldPassword}", newPassword: "${data.newPassword}"}) {
            errorMessage
        }
      }
    `
    return this.http.post<IOutputChangePassword>(`${environment.serverUrl}`, {query})
  }
}
