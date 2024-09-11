import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { ProductsService } from '../../products/services/products.service';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  switchedToDarkMode = false;
  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {}

  toggleTheme(): void {
    this.switchedToDarkMode = !this.switchedToDarkMode;
    const currentTheme = this.productsService.getTheme();
    const newTheme =
      currentTheme === 'light-theme' ? 'dark-theme' : 'light-theme';
    this.productsService.setTheme(newTheme);
  }
}
