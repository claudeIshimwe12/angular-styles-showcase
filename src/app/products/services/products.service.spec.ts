import { TestBed } from "@angular/core/testing";
import {
  HttpClientTestingModule,
  HttpTestingController,
} from "@angular/common/http/testing";
import { ProductsService } from "./products.service";
import { Product } from "../models/product.interface";

describe("ProductsService", () => {
  let service: ProductsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProductsService],
    });
    service = TestBed.inject(ProductsService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  describe("getProducts", () => {
    it("should return an Observable of Product[]", () => {
      const mockProducts: Product[] = [
        {
          id: 1,
          title: "Product 1",
          price: 10,
          description: "Test Product 1",
          category: "Category 1",
          image: "image1.jpg",
          rating: { rate: 4.5, count: 10 },
        },
        {
          id: 2,
          title: "Product 2",
          price: 20,
          description: "Test Product 2",
          category: "Category 2",
          image: "image2.jpg",
          rating: { rate: 4.0, count: 8 },
        },
      ];

      service.getProducts().subscribe((products) => {
        expect(products.length).toBe(2);
        expect(products).toEqual(mockProducts);
      });

      const req = httpMock.expectOne("https://fakestoreapi.com/products");
      expect(req.request.method).toBe("GET");
      req.flush(mockProducts);
    });

    it("should return an empty array when an error occurs", () => {
      service.getProducts().subscribe((products) => {
        expect(products.length).toBe(0);
        expect(products).toEqual([]);
      });

      const req = httpMock.expectOne("https://fakestoreapi.com/products");
      req.flush("Error", { status: 500, statusText: "Internal Server Error" });
    });
  });

  describe("setTheme", () => {
    it("should set the theme and apply it to the body class", () => {
      const theme = "dark-theme";
      service.setTheme(theme);

      expect(service.getTheme()).toBe(theme);
      expect(document.body.className).toBe(theme);
    });
  });

  describe("getTheme", () => {
    it("should return the current theme", () => {
      const currentTheme = service.getTheme();
      expect(currentTheme).toBe("light-theme");
    });
  });
});
