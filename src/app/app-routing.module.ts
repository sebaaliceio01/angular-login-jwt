import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './modules/authentication/components/login/login.component';
import { AdminComponent } from './modules/pages/components/admin/admin.component';
import { PagesComponent } from './modules/pages/components/pages/pages.component';

const routes: Routes = [
  { path: '', component: PagesComponent },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
