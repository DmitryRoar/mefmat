import {NgModule, Provider} from '@angular/core'
import {CommonModule} from '@angular/common'

import {UserRoutingModule} from './user-routing.module'
import {SharedModule} from '../shared/shared.module'
import {HTTP_INTERCEPTORS} from '@angular/common/http'

import {AuthInterceptor} from '../auth/shared/interceptors/auth.interceptor'

import {UserService} from './shared/services/user.service'
import {VerifyGuard} from './shared/guards/verify.guard'

import {UserPageComponent} from './user-page/user-page.component'
import {UserLayoutComponent} from './shared/components/user-layout/user-layout.component'
import {VerifyPageComponent} from './verify-page/verify-page.component'


const INTERCEPTOR_PROVIDER: Provider = {
  provide: HTTP_INTERCEPTORS,
  useClass: AuthInterceptor,
  multi: true
}

@NgModule({
  declarations: [
    UserPageComponent,
    UserLayoutComponent,
    VerifyPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    UserRoutingModule
  ],
  providers: [
    UserService,
    VerifyGuard,
    INTERCEPTOR_PROVIDER
  ]
})
export class UserModule {
}
