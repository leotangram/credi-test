import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

const routes: Routes = [
  {
    path: 'login',
    loadChildren: './modules/login/login.module#LoginModule'
  },
  {
    path: 'signup',
    loadChildren: './modules/signup/signup.module#SignupModule'
  },
  {
    path: 'credit-request',
    loadChildren:
      './modules/credit-request/credit-request.module#CreditRequestModule'
  },
  {
    path: 'users',
    loadChildren: './modules/users/users.module#UsersModule'
  },
  {
    path: 'user/:id',
    loadChildren: './modules/user/user.module#UserModule'
  },
  { path: '', redirectTo: 'users', pathMatch: 'full' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
