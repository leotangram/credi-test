import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { AuthGuard } from './shared/guard/guard'

const routes: Routes = [
  {
    path: 'login',
    loadChildren: './modules/login/login.module#LoginModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'signup',
    loadChildren: './modules/signup/signup.module#SignupModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'credit-request',
    loadChildren:
      './modules/credit-request/credit-request.module#CreditRequestModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'rejected-requests',
    loadChildren:
      './modules/rejected-requests/rejected-requests.module#RejectedRequestsModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'credit-pending',
    loadChildren:
      './modules/credit-pending/credit-pending.module#CreditPendingModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'history',
    loadChildren: './modules/history/history.module#HistoryModule',
    canActivate: [AuthGuard]
  },
  { path: '', redirectTo: 'credit-request', pathMatch: 'full' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
