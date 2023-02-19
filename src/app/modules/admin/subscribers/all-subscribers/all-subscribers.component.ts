import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {SubscriberInterface} from "../interfaces/subscriber.interface";

@Component({
  selector: 'app-all-services',
  templateUrl: './all-subscribers.component.html',
  styleUrls: ['./all-subscribers.component.scss']
})
export class AllSubscribersComponent implements OnInit {
  active = 'top';
  list: SubscriberInterface[] = [];

  constructor(private router: Router,) {
  }

  ngOnInit(): void {
    this.list = [
      {
        id: 5,
        image: './assets/media/stock/600x400/img-26.jpg',
        name: 'mahmoud',
        email: 'mahmoudelagouz21@gmail.com',
        invoices: '6',
        plan: 'Basic',
        status: 'active'
      },
      {
        id: 6,
        image: './assets/media/stock/600x400/img-26.jpg',
        name: 'mahmoud',
        email: 'mahmoudelagouz21@gmail.com',
        invoices: '6',
        plan: 'Basic',
        status: 'active'
      },
      {
        id: 7,
        image: './assets/media/stock/600x400/img-26.jpg',
        name: 'mahmoud',
        email: 'mahmoudelagouz21@gmail.com',
        invoices: '6',
        plan: 'Basic',
        status: 'active'
      },
      {
        id: 8,
        image: './assets/media/stock/600x400/img-26.jpg',
        name: 'mahmoud',
        email: 'mahmoudelagouz21@gmail.com',
        invoices: '6',
        plan: 'Basic',
        status: 'active'
      },
      {
        id: 9,
        image: './assets/media/stock/600x400/img-26.jpg',
        name: 'mahmoud',
        email: 'mahmoudelagouz21@gmail.com',
        invoices: '6',
        plan: 'Basic',
        status: 'active'
      },
      {
        id: 1,
        image: './assets/media/stock/600x400/img-26.jpg',
        name: 'mahmoud',
        email: 'mahmoudelagouz21@gmail.com',
        invoices: '6',
        plan: 'Basic',
        status: 'active'
      },
      {
        id: 2,
        image: './assets/media/stock/600x400/img-26.jpg',
        name: 'mahmoud',
        email: 'mahmoudelagouz21@gmail.com',
        invoices: '6',
        plan: 'Basic',
        status: 'active'
      },
    ];
  }


}
