import {Component, DoCheck, Input, OnInit} from '@angular/core'
import {StorageEnum} from '../../enums/storage.enum'

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements DoCheck {
  isBurger = ''

  constructor() {
  }

  ngDoCheck(): void {
    this.isBurger = localStorage.getItem(StorageEnum.openBurger)
  }

}
