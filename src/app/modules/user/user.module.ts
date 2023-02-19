import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import {InlineSVGModule} from "ng-inline-svg-2";
import {CardsModule, DropdownMenusModule, WidgetsModule} from "../../_metronic/partials";

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    WidgetsModule,
    InlineSVGModule,
    DropdownMenusModule,
    CardsModule,
  ],
})
export class UserModule {}
