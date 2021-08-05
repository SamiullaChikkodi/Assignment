import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { Product, ProductService } from './services/product.service';
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    ProductListComponent,
    ProductListComponent, FilterPipe   
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [{provide:"productService", useClass:ProductService}],
  bootstrap: [SearchBarComponent]
})
export class AppModule { }
