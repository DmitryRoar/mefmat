import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'

import {UserRoutingModule} from './user-routing.module'
import {SharedModule} from '../shared/shared.module'

import {UserService} from './shared/services/user.service'

import {UserPageComponent} from './user-page/user-page.component'
import {UserLayoutComponent} from './shared/components/user-layout/user-layout.component'

@NgModule({
  declarations: [
    UserPageComponent,
    UserLayoutComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    UserRoutingModule
  ],
  providers: [UserService]
})
export class UserModule {
}
