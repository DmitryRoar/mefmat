import {BrowserModule} from '@angular/platform-browser'
import {NgModule} from '@angular/core'

import {AppRoutingModule} from './app-routing.module'
import {SharedModule} from './shared/shared.module'

import {RefDirective} from './shared/directives/ref.directive'

import {AppComponent} from './app.component'
import {MainLayoutComponent} from './shared/components/main-layout/main-layout.component'
import {HomePageComponent} from './home-page/home-page.component'
import {EmptyComponent} from './shared/components/empty/empty.component'
import {HeaderComponent} from './shared/components/header/header.component'
import {WarningComponent} from './shared/components/warning/warning.component'

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    HomePageComponent,
    EmptyComponent,
    WarningComponent,
    RefDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  exports: [
    HeaderComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
