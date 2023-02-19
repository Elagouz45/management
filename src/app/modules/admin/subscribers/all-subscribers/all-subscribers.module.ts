import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AllSubscribersComponent} from './all-subscribers.component';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {CardsModule, DropdownMenusModule, WidgetsModule} from "../../../../_metronic/partials";
import {InlineSVGModule} from "ng-inline-svg-2";
import {SubscribersTableComponent} from "../components/subscribers-table/subscribers-table.component";
import {AddComponent} from "../management/add/add.component";
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
const routes = [
  {
    path: '',
    component: AllSubscribersComponent,
  },
]


@NgModule({
  declarations: [
    AllSubscribersComponent,
    SubscribersTableComponent,
    AddComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    WidgetsModule,
    InlineSVGModule,
    DropdownMenusModule,
    CardsModule,
    NgbNavModule
  ],
  exports: [AllSubscribersComponent, SubscribersTableComponent ,  AddComponent]
})
export class AllSubscribersModule {
}
