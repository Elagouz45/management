import {Component, Input, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { SubscriptionsService } from '../../../subscriptions/subscriptions.service';
@Component({
  selector: 'app-add',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  @Input() color: string = '';
  constructor(private api: SubscriptionsService, private router: Router,) { }

  ngOnInit(): void {
  }


}
