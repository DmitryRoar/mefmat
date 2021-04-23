import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'

import {SweetAlert2Module} from '@sweetalert2/ngx-sweetalert2'

import {UserRoutingModule} from './user-routing.module'
import {SharedModule} from '../shared/shared.module'

import {UserService} from './shared/services/user.service'
import {VerifyGuard} from './shared/guards/verify.guard'

import {UserPageComponent} from './user-page/user-page.component'
import {UserLayoutComponent} from './shared/components/user-layout/user-layout.component'
import {VerifyPageComponent} from './verify-page/verify-page.component'

@NgModule({
  declarations: [
    UserPageComponent,
    UserLayoutComponent,
    VerifyPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    UserRoutingModule,
    SweetAlert2Module.forChild()
  ],
  providers: [
    UserService,
    VerifyGuard
  ]
})
export class UserModule {
}
