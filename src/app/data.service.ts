import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProduct } from './shared/product'
import { Observable, throwError } from 'rxjs';
import {  catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
constructor(private http: HttpClient){}
private productsUrl = 'https://localhost:44396/api/products';
private productByIdUrl = 'https://localhost:44396/api/Products/';
private CategoriesUrl = 'https://localhost:44396/api/categories/categoriesdetails';
private SubcategoriesUrl = 'https://localhost:44396/api/subcategories/';
private productsDetailsBySubcatId = 'https://localhost:44396/api/getproductsbysubcategory/'
private productsDetailsByProductName = 'https://localhost:44396/api/getproductsdetailsbyproductname/'

getProducts(): Observable<IProduct[]> {
  return this.http.get<IProduct[]>(this.productsUrl);
}

getProductById(id): Observable<IProduct[]> {
  return this.http.get<IProduct[]>(this.productByIdUrl+id);
}

getCategories(){
  return this.http.get(this.CategoriesUrl);
}

getSubcategoriesByCategoryId(id){
  return this.http.get(this.SubcategoriesUrl+id);
}

getProductsDetailsBySubcategoryId(id){
  return this.http.get(this.productsDetailsBySubcatId+id);
}


getProductsDetailsByProductName(name): Observable<IProduct[]>{
  return this.http.get<IProduct[]>(this.productsDetailsByProductName+name);
}
}
