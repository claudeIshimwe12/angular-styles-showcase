import { Component } from "@angular/core";
import { ProductsService } from "../../products/services/products.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrl: "./header.component.scss",
})
export class HeaderComponent {
  switchedToDarkMode = false;
  constructor(private productsService: ProductsService) {}

  toggleTheme(): void {
    this.switchedToDarkMode = !this.switchedToDarkMode;
    const currentTheme = this.productsService.getTheme();
    const newTheme =
      currentTheme === "light-theme" ? "dark-theme" : "light-theme";
    this.productsService.setTheme(newTheme);
  }
}
