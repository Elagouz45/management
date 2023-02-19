import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import { GoogleMapsModule } from '@angular/google-maps';
import {ContactUsComponent} from "./contact-us.component";
const routes = [
  {
    path: '',
    component: ContactUsComponent,
  },
]

@NgModule({
  declarations: [ContactUsComponent],
  exports: [
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    GoogleMapsModule
  ]
})
export class ContactUsModule { }
