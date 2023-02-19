import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {AllSubscribersModule} from "./all-subscribers/all-subscribers.module";
const routes = [
  {
    path: 'all',
    loadChildren: () =>
      import('./all-subscribers/all-subscribers.module').then((m) => m.AllSubscribersModule),
  },
  {
    path: 'account',
    loadChildren: () =>
      import('./management/show/account.module').then((m) => m.AccountModule),
  },
]


@NgModule({
  declarations: [],
  exports: [
  ],
  imports: [
    CommonModule,
    AllSubscribersModule,
    RouterModule.forChild(routes)
  ]
})
export class SubscribersModule { }
