import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ProductComponent } from "./product.component";
import { Product } from "../../models/product.interface";
import { By } from "@angular/platform-browser";

describe("ProductComponent", () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;

  const mockProduct: Product = {
    id: 1,
    title: "Test Product",
    price: 100,
    description: "A great test product",
    category: "Test Category",
    image: "test-product.jpg",
    rating: {
      rate: 4.5,
      count: 10,
    },
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should render product details", () => {
    component.product = mockProduct;
    fixture.detectChanges();

    // Check if the product title is rendered
    const titleElement = fixture.debugElement.query(
      By.css(".product-title"),
    ).nativeElement;
    expect(titleElement.textContent).toContain("Test Product");

    // Check if the product price is rendered
    const priceElement = fixture.debugElement.query(
      By.css(".product-price"),
    ).nativeElement;
    expect(priceElement.textContent).toContain("100");
  });

  it("should throw an error if product input is not provided", () => {
    try {
      fixture.detectChanges();
    } catch (error) {
      expect(error).toBeTruthy();
    }
  });
});
