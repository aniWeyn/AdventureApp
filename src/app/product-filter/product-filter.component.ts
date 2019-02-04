import { Component, OnInit, Input } from '@angular/core';
import { IProduct } from '../shared/product'

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.scss']
})
export class ProductFilterComponent implements OnInit {
  filteredProducts: IProduct[];

  @Input() searchedProduct: IProduct[];
  constructor() {
    this.filteredProducts = this.searchedProduct
    this.listFilter = ''
  }

  _listFilter: string;
  get listFilter(): string {
    return this._listFilter
  }
  set listFilter(value: string) {
    this._listFilter = value
    if (this.filteredProducts) {
      this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.searchedProduct;
    }
  }

  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.filteredProducts.filter((product: IProduct) =>
      product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  ngOnInit() {
  }
}
