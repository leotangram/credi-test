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
  { path: '', redirectTo: 'login', pathMatch: 'full' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
