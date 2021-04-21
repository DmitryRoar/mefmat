import {BrowserModule} from '@angular/platform-browser'
import {NgModule} from '@angular/core'

import {AppRoutingModule} from './app-routing.module'
import {SharedModule} from './shared/shared.module'

import {RefDirective} from './shared/directives/ref.directive'

import {AppComponent} from './app.component'
import {MainLayoutComponent} from './shared/components/main-layout/main-layout.component'
import {WarningComponent} from './shared/components/warning/warning.component'
import {HomePageComponent} from './home-page/home-page.component'
import {HeaderComponent} from './shared/components/header/header.component'
import {SideMenuComponent} from './shared/components/side-menu/side-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    WarningComponent,
    HomePageComponent,
    HeaderComponent,
    SideMenuComponent,
    RefDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
