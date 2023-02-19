import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AllServicesComponent} from './all-services.component';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {CardsModule, DropdownMenusModule, WidgetsModule} from "../../../../_metronic/partials";
import {InlineSVGModule} from "ng-inline-svg-2";
import {CardPackageItemComponent} from "../components/card-package-item/card-package-item.component";
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
const routes = [
  {
    path: '',
    component: AllServicesComponent,
  },
]


@NgModule({
  declarations: [
    AllServicesComponent,
    CardPackageItemComponent
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
  exports: [AllServicesComponent, CardPackageItemComponent]
})
export class AllServicesModule {
}
