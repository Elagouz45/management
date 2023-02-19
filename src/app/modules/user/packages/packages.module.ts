import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {AllPackagesModule} from "./all-packages/all-packages.module";
const routes = [
  {
    path: 'all',
    loadChildren: () =>
      import('./all-packages/all-packages.module').then((m) => m.AllPackagesModule),
  },
]


@NgModule({
  declarations: [],
  exports: [
  ],
  imports: [
    CommonModule,
    AllPackagesModule,
    RouterModule.forChild(routes)
  ]
})
export class PackagesModule { }
