import { Component, Input } from '@angular/core';
import { Product } from '../../models/product.interface';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent {
  @Input({ required: true }) product!: Product;

  // product: Product = {
  //   id: 1,
  //   title: 'Cool Headphones',
  //   price: 59.99,
  //   description:
  //     'High-quality sound with noise cancellation and comfortable design.',
  //   category: 'Electronics',
  //   image: 'https://example.com/image.jpg',
  //   rating: {
  //     rate: 4.5,
  //     count: 120,
  //   },
  // };
}
