import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {SubscriptionsService} from '../../../subscriptions/subscriptions.service';
import {SubscriberInterface} from "../../interfaces/subscriber.interface";

@Component({
  selector: 'app-subscribers-table',
  templateUrl: './subscribers-table.component.html',
  styleUrls: ['./subscribers-table.component.scss']
})
export class SubscribersTableComponent implements OnInit {
  @Input() color: string = '';
  @Input() list: SubscriberInterface[] = [];

  constructor(private api: SubscriptionsService, private router: Router,) {
  }

  ngOnInit(): void {
  }


}
