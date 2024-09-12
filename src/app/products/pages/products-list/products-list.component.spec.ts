import { ComponentFixture, TestBed } from "@angular/core/testing";
import { of } from "rxjs";
import { ProductsListComponent } from "./products-list.component";
import { ProductsService } from "../../services/products.service";
import { Product } from "../../models/product.interface";

describe("ProductsListComponent", () => {
  let component: ProductsListComponent;
  let fixture: ComponentFixture<ProductsListComponent>;
  let mockProductsService: any;

  beforeEach(async () => {
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

    mockProductsService = {
      getProducts: jest.fn().mockReturnValue(of(mockProducts)),
    };

    await TestBed.configureTestingModule({
      declarations: [ProductsListComponent],
      providers: [{ provide: ProductsService, useValue: mockProductsService }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should set products$ on init", () => {
    component.ngOnInit();

    component.products$.subscribe((products) => {
      expect(products.length).toBe(2);
      expect(products).toEqual([
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
      ]);
    });

    expect(mockProductsService.getProducts).toHaveBeenCalledTimes(2);
  });
});
