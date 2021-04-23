import {Component, OnInit} from '@angular/core'

import {StorageEnum} from '../../enums/storage.enum'
import {MainService} from '../../services/main.service'

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {
  constructor(
    public readonly  mainService: MainService
  ) {
  }

  ngOnInit(): void {
  }

  closeWarning() {
  }
}
