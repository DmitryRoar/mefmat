import {Component, DoCheck, OnChanges, OnInit, ViewEncapsulation} from '@angular/core'

import {UserService} from '../shared/services/user.service'

import {StorageEnum} from '../shared/enums/storage.enum'

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit, DoCheck {
  openBurger = ''

  constructor(
    public userService: UserService
  ) { }

  ngOnInit(): void {
  }

  ngDoCheck(): void {
    this.openBurger = localStorage.getItem(StorageEnum.openBurger)
  }
}
