import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { OrganizationComponent } from './organization/organization.component';
import { AuthGuardService } from './auth/auth-guard.service';

const routes: Routes = [
  {path: '', component: AuthComponent},
  {
    path: 'organizations', 
    component: OrganizationComponent,
    canActivate: [AuthGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
