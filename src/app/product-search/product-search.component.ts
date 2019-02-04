import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { IProduct } from '../shared/product'
import * as $ from 'jquery'

@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.scss']
})
export class ProductSearchComponent implements OnInit {

  constructor(private data: DataService) { 

  }
  dItemId: "pName";
  searchedProduct: IProduct[];


  ngOnInit() {
    $(document).ready(function(){
      $('.dropdown-item').mousedown(function(event) {
        var dItemId = event.currentTarget.id
        var dItemText = event.currentTarget.innerText
        $('#buttonSearchBy').text(dItemText);
        $('#searchBy').val(dItemId);
        console.log($('#searchBy').val())
      });
    })
  }

  value = '';
  onEnter(value: string) { 
    document.getElementById("searchResult").style.display = "block";
    this.value = value; 

    /*if(this.dItemId == "pId")
    { 
      this.data.getProductById(value).subscribe(data => {
        this.searchedProduct = data
        console.log(data)
      })
    }*/
    //if(this.dItemId == "pName")
    //{
      this.data.getProductsDetailsByProductName(value).subscribe(data => {
        this.searchedProduct = data
        console.log(data)
      })
    //}
  }
}
