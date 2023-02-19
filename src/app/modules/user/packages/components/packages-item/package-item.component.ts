import {Component, Input, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { SubscriptionsService } from '../../../subscriptions/subscriptions.service';
@Component({
  selector: 'app-package-item',
  templateUrl: './package-item.component.html',
  styleUrls: ['./package-item.component.scss']
})
export class PackageItemComponent implements OnInit {
  @Input() color: string = '';
  constructor(private api: SubscriptionsService, private router: Router,) { }

  ngOnInit(): void {
  }


}
