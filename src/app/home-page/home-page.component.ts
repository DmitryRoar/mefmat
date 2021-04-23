import {Component, DoCheck, OnChanges, OnInit, ViewEncapsulation} from '@angular/core'

import {MainService} from '../shared/services/main.service'

import {StorageEnum} from '../shared/enums/storage.enum'
import {IBestUser} from '../shared/interfaces/best-user.interface'

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit, DoCheck {
  openBurger = ''

  users: IBestUser[] = []

  constructor(
    private mainService: MainService
  ) { }

  ngOnInit(): void {
    this.users = this.mainService.getBestWeek()
  }

  ngDoCheck(): void {
    this.openBurger = localStorage.getItem(StorageEnum.openBurger)
  }
}
