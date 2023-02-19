import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AllPackagesComponent} from './all-packages.component';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {CardsModule, DropdownMenusModule, WidgetsModule} from "../../../../_metronic/partials";
import {InlineSVGModule} from "ng-inline-svg-2";
import {PackageItemComponent} from "../components/packages-item/package-item.component";
import {PackageTabsComponent} from "../components/packages-tabs/package-tabs.component";
import {CardPackageItemComponent} from "../components/card-package-item/card-package-item.component";
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
const routes = [
  {
    path: '',
    component: AllPackagesComponent,
  },
]


@NgModule({
  declarations: [
    AllPackagesComponent,
    PackageItemComponent,
    PackageTabsComponent,
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
  exports: [AllPackagesComponent, PackageItemComponent , PackageTabsComponent , CardPackageItemComponent]
})
export class AllPackagesModule {
}
