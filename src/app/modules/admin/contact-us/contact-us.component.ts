
import { Component, OnInit } from '@angular/core';
import {Observable, of} from "rxjs";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-widgets-examples',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
})
export class ContactUsComponent implements OnInit {
  apiLoaded: Observable<boolean>;
  constructor(httpClient: HttpClient) {

  }

  ngOnInit(): void {}
}
