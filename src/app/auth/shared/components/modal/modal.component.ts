import {Component, Input, OnInit} from '@angular/core'

import {IModal} from '../../interfaces/modal.interface'

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input() modal: IModal

  constructor() { }

  ngOnInit(): void {
  }
}
