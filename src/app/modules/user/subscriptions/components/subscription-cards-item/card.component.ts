import {Component, Input, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { SubscriptionsService } from '../../subscriptions.service';
@Component({
  selector: 'app-package-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() color: string = '';
  constructor(private api: SubscriptionsService, private router: Router,) { }

  ngOnInit(): void {
  }


}
