import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router'

import {MainLayoutComponent} from './shared/components/main-layout/main-layout.component'
import {HomePageComponent} from './home-page/home-page.component'

const authRoutes: Routes = [
  {path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)}
]

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {path: '', component: HomePageComponent, children: authRoutes}
    ]
  },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then(m => m.UserModule)
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
