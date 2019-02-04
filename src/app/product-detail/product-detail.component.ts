import { Component, OnInit, Input } from '@angular/core';
import {ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  
  @Input() productsdetails: Object;
  constructor() {
  }

  ngOnInit() {
  }

}
