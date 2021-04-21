import {Component, OnInit} from '@angular/core'

import {StorageEnum} from '../../enums/storage.enum'

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {
  constructor() {
  }

  ngOnInit(): void {
  }

  closeWarning() {
  }

  checkReadWarning() {
    return !!localStorage.getItem(StorageEnum.readWarning)
  }
}
