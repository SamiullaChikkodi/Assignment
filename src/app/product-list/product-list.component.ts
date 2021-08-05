import { Component, Inject, OnInit } from '@angular/core';
import { Product, ProductService } from '../services/product.service';

@Component({
  selector: 'productList-comp',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products:Product[];
  
  constructor(@Inject("productService")productService:any) 
  {
      this.products = productService.getProducts();
  }

  // PRODUCTS = [
  //   {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  //   {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  //   {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  //   {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  //   {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  //   {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
  // ];

  ngOnInit(): void {
  }

}
