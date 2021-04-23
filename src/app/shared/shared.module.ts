import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {HttpClientModule} from '@angular/common/http'
import {RouterModule} from '@angular/router'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'

import {HeaderComponent} from './components/header/header.component'
import {SideMenuComponent} from './components/side-menu/side-menu.component'
import {FooterComponent} from './components/footer/footer.component'

@NgModule({
  declarations: [
    HeaderComponent,
    SideMenuComponent,
    FooterComponent
  ],
  imports: [
    RouterModule,
    CommonModule
  ],
  exports: [
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    HeaderComponent,
    SideMenuComponent,
    FooterComponent
  ]
})
export class SharedModule {
}
