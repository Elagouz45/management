import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ShowAllComponent} from './show-all.component';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {CardComponent} from "../components/subscription-cards-item/card.component";
import {CardsModule, DropdownMenusModule, WidgetsModule} from "../../../../_metronic/partials";
import {InlineSVGModule} from "ng-inline-svg-2";

const routes = [
  {
    path: '',
    component: ShowAllComponent,
  },
]


@NgModule({
  declarations: [
    ShowAllComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    WidgetsModule,
    InlineSVGModule,
    DropdownMenusModule,
    CardsModule,
  ],
  exports: [ShowAllComponent, CardComponent]
})
export class ShowAllModule {
}
