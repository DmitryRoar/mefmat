import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {environment} from '../../../../environments/environment'

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {
  }

  createUser(data: string) {
    return this.http.post(`${environment.serverUrl}`, data)
  }
}
