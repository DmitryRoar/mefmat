import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'

import {VerifyGuard} from './shared/guards/verify.guard'

import {UserLayoutComponent} from './shared/components/user-layout/user-layout.component'
import {UserPageComponent} from './user-page/user-page.component'
import {VerifyPageComponent} from './verify-page/verify-page.component'

const routes: Routes = [
  {
    path: '',
    component: UserLayoutComponent,
    children: [
      {path: ':id', component: UserPageComponent},
      {path: '**', component: VerifyPageComponent, canActivate: [VerifyGuard]},
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
