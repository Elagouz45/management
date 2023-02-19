import {Component, Input, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { SubscriptionsService } from '../../../subscriptions/subscriptions.service';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  @Input() color: string = '';
  constructor(private api: SubscriptionsService, private router: Router,) { }

  ngOnInit(): void {
  }


}
