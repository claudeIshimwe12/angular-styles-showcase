import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ProductsRoutingModule } from "./products-routing.module";
import { ProductsComponent } from "./products.component";
import { ProductsListComponent } from "./pages/products-list/products-list.component";
import { ProductComponent } from "./components/product/product.component";
// import { ProductsComponent } from './components/products/products.component';

@NgModule({
  declarations: [ProductsComponent, ProductsListComponent, ProductComponent],
  imports: [CommonModule, ProductsRoutingModule],
})
export class ProductsModule {}
