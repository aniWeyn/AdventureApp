import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { ProductsComponent } from './products/products.component';
import { PersonsComponent } from './persons/persons.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { HttpClientModule } from '@angular/common/http';
import { SubcategoryComponent } from './subcategory/subcategory.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductSearchComponent } from './product-search/product-search.component';
import { ProductFilterComponent } from './product-filter/product-filter.component';
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ProductsComponent,
    PersonsComponent,
    ProductDetailComponent,
    PageNotFoundComponent,
    SubcategoryComponent,
    ProductListComponent,
    ProductSearchComponent,
    ProductFilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
