import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'

import {UserLayoutComponent} from './shared/components/user-layout/user-layout.component'
import {UserPageComponent} from './user-page/user-page.component'

const routes: Routes = [
  {
    path: '',
    component: UserLayoutComponent,
    children: [
      {path: ':id', component: UserPageComponent}
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
