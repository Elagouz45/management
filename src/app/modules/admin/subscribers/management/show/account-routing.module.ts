import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SettingsComponent} from "./settings/settings.component";
import {OverviewComponent} from "./overview/overview.component";
import {AccountComponent} from "./account.component";
import {InvoicesComponent} from "./invoices/invoices.component";

;

const routes: Routes = [
  {
    path: '',
    component: AccountComponent,
    children: [
      {
        path: 'overview',
        component: OverviewComponent,
      },
      {
        path: 'settings',
        component: SettingsComponent,
      },
      {
        path: 'invoices',
        component: InvoicesComponent,
      },
      { path: '', redirectTo: 'overview', pathMatch: 'full' },
    ],
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountRoutingModule {}
