import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import {InlineSVGModule} from "ng-inline-svg-2";
import {CardsModule, DropdownMenusModule, WidgetsModule} from "../../_metronic/partials";

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    WidgetsModule,
    InlineSVGModule,
    DropdownMenusModule,
    CardsModule,
  ],
})
export class AdminModule {}
