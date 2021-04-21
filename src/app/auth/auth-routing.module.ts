import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'

import {LoginPageComponent} from './login-page/login-page.component'
import {RegisterPageComponent} from './register-page/register-page.component'
import {RegisterModelPageComponent} from './register-model-page/register-model-page.component'

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'sign-in'},
  {path: 'sign-in', component: LoginPageComponent},
  {path: 'sign-up', component: RegisterPageComponent},
  {path: 'sign-up/model', component: RegisterModelPageComponent}
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AuthRoutingModule {
}
