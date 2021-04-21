import {Component, OnInit} from '@angular/core'

import {StorageEnum} from '../../enums/storage.enum'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  openBurger = false

  constructor() {
  }

  ngOnInit(): void {
  }

  onBurger() {
    this.openBurger = !this.openBurger
    localStorage.setItem(StorageEnum.openBurger, this.openBurger.toString())
  }
}
