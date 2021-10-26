import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './components/pages/pages.component';
import { SharedModule } from '../shared/shared.module';
import { AdminComponent } from './components/admin/admin.component';



@NgModule({
  declarations: [
    PagesComponent,
    AdminComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
  ], exports: [
    PagesComponent,
  ]
})
export class PagesModule { }
