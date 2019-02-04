import { Component, OnInit, OnChanges } from '@angular/core';
import { DataService } from '../data.service';
import { IProduct } from '../shared/product'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnChanges  {

  products: IProduct[];
  categories: Object;
  subcategories: Object;


  getSubcategories(categoryId: string){
    this.data.getSubcategoriesByCategoryId(categoryId).subscribe(data =>
      {
        this.subcategories = data
        var elements = document.getElementsByClassName("queryCategories");
      })
  }

  constructor(private data: DataService) { }

  ngOnInit() {   



    this.data.getProducts().subscribe(data => {
      this.products = data
    })

    this.data.getCategories().subscribe(data => {
      this.categories = data
    })
  }

  ngOnChanges()
  {

  }
}