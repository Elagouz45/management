import {Component, Input, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { SubscriptionsService } from '../../../subscriptions/subscriptions.service';
@Component({
  selector: 'app-package-tabs',
  templateUrl: './package-tabs.component.html',
  styleUrls: ['./package-tabs.component.scss']
})
export class PackageTabsComponent implements OnInit {
  @Input() color: string = '';
  constructor(private api: SubscriptionsService, private router: Router,) { }

  ngOnInit(): void {
  }


}
