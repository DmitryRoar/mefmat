import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'

import {AuthRoutingModule} from './auth-routing.module'
import {SharedModule} from '../shared/shared.module'

import {LoginPageComponent} from './login-page/login-page.component'

import {ModalComponent} from './shared/components/modal/modal.component'
import {RegisterPageComponent} from './register-page/register-page.component'
import {RegisterModelPageComponent} from './register-model-page/register-model-page.component'
import {AuthService} from './shared/services/auth.service'

@NgModule({
  declarations: [
    LoginPageComponent,
    ModalComponent,
    RegisterPageComponent,
    RegisterModelPageComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule
  ],
  providers: [
    AuthService
  ]
})
export class AuthModule {
}
