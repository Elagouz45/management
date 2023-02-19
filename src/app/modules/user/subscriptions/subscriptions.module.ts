import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowAllModule } from './show-all/show-all.module';
import {RouterModule} from "@angular/router";
const routes = [
  {
    path: 'all',
    loadChildren: () =>
      import('./show-all/show-all.module').then((m) => m.ShowAllModule),
  },
]


@NgModule({
  declarations: [],
  exports: [
  ],
  imports: [
    CommonModule,
    ShowAllModule,
    RouterModule.forChild(routes)
  ]
})
export class SubscriptionsModule { }
