import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SubscriptionsService } from '../subscriptions.service';
@Component({
  selector: 'app-show-all',
  templateUrl: './show-all.component.html',
  styleUrls: ['./show-all.component.scss']
})
export class ShowAllComponent implements OnInit {
  constructor(private api: SubscriptionsService, private router: Router,) { }

  ngOnInit(): void {
  }


}
