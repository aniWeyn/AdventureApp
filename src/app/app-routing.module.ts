import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductsComponent } from './products/products.component';
import {ProductDetailComponent } from './product-detail/product-detail.component';
import {PersonsComponent } from './persons/persons.component';
import { ProductSearchComponent} from './product-search/product-search.component';
import {PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
    {path: '', redirectTo: 'products', pathMatch: 'full'}, //default path
    {path: 'products', component: ProductsComponent}, 
    {path: 'products:id', component: ProductDetailComponent},
    {path: 'persons', component: PersonsComponent},
    {path: 'productsearch', component: ProductSearchComponent},
    {path: '**', component: PageNotFoundComponent } //redirection if page not found];
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
