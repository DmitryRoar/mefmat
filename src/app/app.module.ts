import {BrowserModule} from '@angular/platform-browser'
import {NgModule, Provider} from '@angular/core'

import {AppRoutingModule} from './app-routing.module'
import {SharedModule} from './shared/shared.module'

import {AppComponent} from './app.component'
import {MainLayoutComponent} from './shared/components/main-layout/main-layout.component'
import {HomePageComponent} from './home-page/home-page.component'
import {EmptyComponent} from './shared/components/empty/empty.component'
import {WarningComponent} from './shared/components/warning/warning.component'
import {HTTP_INTERCEPTORS} from '@angular/common/http'
import {AuthInterceptor} from './auth/shared/interceptors/auth.interceptor'
import {SweetAlert2Module} from '@sweetalert2/ngx-sweetalert2'

const INTERCEPTOR_PROVIDER: Provider = {
  provide: HTTP_INTERCEPTORS,
  useClass: AuthInterceptor,
  multi: true
}

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    HomePageComponent,
    EmptyComponent,
    WarningComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    SweetAlert2Module.forRoot()
  ],
  providers: [INTERCEPTOR_PROVIDER],
  bootstrap: [AppComponent]
})
export class AppModule {
}
