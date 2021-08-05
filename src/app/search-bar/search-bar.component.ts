import { Component, OnInit, Inject } from '@angular/core';
import { FilterPipe } from './../filter.pipe';
import { Product, ProductService } from '../services/product.service';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'searchbar-comp',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  
  products:Product[];
  searchText:string;
  constructor(@Inject("productService")productService:any) { 
    this.searchText = ""
    this.products = productService.getProducts();
  }

  productFilter(e){
    this.products.filter(prod=>prod.stocked==true)
  }
  ngOnInit(): void {
  }

}
