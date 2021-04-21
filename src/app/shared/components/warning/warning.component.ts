import {Component, EventEmitter, OnInit, Output} from '@angular/core'
import {StorageEnum} from '../../enums/storage.enum'

@Component({
  selector: 'app-warning',
  templateUrl: './warning.component.html',
  styleUrls: ['./warning.component.scss']
})
export class WarningComponent implements OnInit {
  @Output() warning = new EventEmitter<boolean>()

  constructor() { }

  ngOnInit(): void {
  }

  closeWarning() {
    this.warning.emit()
    localStorage.setItem(StorageEnum.readWarning, 'true')
  }
}
