import {Component, Input, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { SubscriptionsService } from '../../../subscriptions/subscriptions.service';
@Component({
  selector: 'app-card-package-item',
  templateUrl: './card-package-item.component.html',
  styleUrls: ['./card-package-item.component.scss']
})
export class CardPackageItemComponent implements OnInit {
  @Input() color: string = '';
  @Input() image: string = '';
  @Input() title: string = '';
  constructor(private api: SubscriptionsService, private router: Router,) { }

  ngOnInit(): void {
  }


}
