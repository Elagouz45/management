import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {AllServicesModule} from "./all-services/all-services.module";
const routes = [
  {
    path: 'all',
    loadChildren: () =>
      import('./all-services/all-services.module').then((m) => m.AllServicesModule),
  },
]


@NgModule({
  declarations: [],
  exports: [
  ],
  imports: [
    CommonModule,
    AllServicesModule,
    RouterModule.forChild(routes)
  ]
})
export class ServicesModule { }
