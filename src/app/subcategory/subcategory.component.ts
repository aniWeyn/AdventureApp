import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ISubcategory } from './subcategory';
import { DataService } from '../data.service';
import { IProductList } from '../shared/product-list'

@Component({
  selector: 'app-subcategory',
  templateUrl: './subcategory.component.html',
  styleUrls: ['./subcategory.component.scss']
})
export class SubcategoryComponent implements OnInit, OnChanges {

  productsdetails: Object;
  @Input() subcategories: ISubcategory;
  constructor(private data: DataService) { }

  
  getProductsBySubcategoryId(subcategoryId: string)
  {
    this.data.getProductsDetailsBySubcategoryId(subcategoryId).subscribe(data =>
      {
      this.productsdetails = data
      console.log( this.productsdetails)
    })
  }

  ngOnInit() {
  }

  ngOnChanges()
  {

  }

}
