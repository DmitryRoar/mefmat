import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'

import {UserGuard} from './shared/guards/user.guard'

import {UserLayoutComponent} from './shared/components/user-layout/user-layout.component'
import {UserPageComponent} from './user-page/user-page.component'
import {VerifyPageComponent} from './verify-page/verify-page.component'
import {SettingsPageComponent} from './settings-page/settings-page.component'

const routes: Routes = [
  {
    path: '',
    component: UserLayoutComponent,
    canActivateChild: [UserGuard],
    children: [
      {path: 'settings', component: SettingsPageComponent, children: [
          {path: 'email/verify', component: VerifyPageComponent},
      ]},
      {path: ':id', component: UserPageComponent},
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class UserRoutingModule {
}
