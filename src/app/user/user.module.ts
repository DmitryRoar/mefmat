import {NgModule, Provider} from '@angular/core'
import {CommonModule} from '@angular/common'

import {UserRoutingModule} from './user-routing.module'
import {SharedModule} from '../shared/shared.module'
import {HTTP_INTERCEPTORS} from '@angular/common/http'

import {AuthInterceptor} from '../auth/shared/interceptors/auth.interceptor'

import {UserService} from './shared/services/user.service'
import {UserGuard} from './shared/guards/user.guard'

import {UserPageComponent} from './user-page/user-page.component'
import {UserLayoutComponent} from './shared/components/user-layout/user-layout.component'
import {VerifyPageComponent} from './verify-page/verify-page.component';
import { SettingsPageComponent } from './settings-page/settings-page.component'
import {SweetAlert2Module} from '@sweetalert2/ngx-sweetalert2'


const INTERCEPTOR_PROVIDER: Provider = {
  provide: HTTP_INTERCEPTORS,
  useClass: AuthInterceptor,
  multi: true
}

@NgModule({
  declarations: [
    UserPageComponent,
    UserLayoutComponent,
    VerifyPageComponent,
    SettingsPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    UserRoutingModule,
    SweetAlert2Module.forChild()
  ],
  providers: [
    UserService,
    UserGuard,
    INTERCEPTOR_PROVIDER
  ]
})
export class UserModule {
}
