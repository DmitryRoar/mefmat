import {Component, Input, OnInit} from '@angular/core'

import {StorageEnum} from '../../enums/storage.enum'
import {AuthService} from '../../../auth/shared/services/auth.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() userPage: boolean

  openBurger = false
  searchWindow = false

  constructor(
    private readonly authService: AuthService
  ) {}

  ngOnInit(): void {
  }

  onBurger() {
    this.openBurger = !this.openBurger
    localStorage.setItem(StorageEnum.openBurger, this.openBurger.toString())
  }

  logout() {
    const query = `
      mutation {
        logout {
          success
        }
      }
    `
    this.authService.logout(query).subscribe()
  }
}
