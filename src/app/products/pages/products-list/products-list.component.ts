import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Product } from "../../models/product.interface";
import { ProductsService } from "../../services/products.service";
import { ChangeDetectionStrategy } from "@angular/core";

@Component({
  selector: "app-products-list",
  templateUrl: "./products-list.component.html",
  styleUrl: "./products-list.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsListComponent implements OnInit {
  products$!: Observable<Product[]>;
  constructor(private productsService: ProductsService) {}
  ngOnInit(): void {
    this.products$ = this.productsService.getProducts();
  }
}
