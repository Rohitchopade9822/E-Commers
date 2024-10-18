import { Component } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-order-con',
  templateUrl: './order-con.component.html',
  styleUrls: ['./order-con.component.css']
})
export class OrderConComponent {

  constructor(@Inject(DOCUMENT) private document: Document) {}

}
