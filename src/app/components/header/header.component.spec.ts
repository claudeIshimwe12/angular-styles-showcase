import { ComponentFixture, TestBed } from "@angular/core/testing";
import { HeaderComponent } from "./header.component";
import { ProductsService } from "../../products/services/products.service";

describe("HeaderComponent", () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let mockProductsService: any;

  beforeEach(async () => {
    mockProductsService = {
      getTheme: jest.fn().mockReturnValue("light-theme"),
      setTheme: jest.fn(),
    };

    await TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      providers: [{ provide: ProductsService, useValue: mockProductsService }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  describe("toggleTheme", () => {
    it("should toggle the `switchedToDarkMode` flag", () => {
      expect(component.switchedToDarkMode).toBe(false);

      component.toggleTheme();
      expect(component.switchedToDarkMode).toBe(true);

      component.toggleTheme();
      expect(component.switchedToDarkMode).toBe(false);
    });

    it("should switch the theme from light to dark and call `setTheme`", () => {
      mockProductsService.getTheme.mockReturnValue("light-theme");

      component.toggleTheme();

      expect(mockProductsService.getTheme).toHaveBeenCalledTimes(1);
      expect(mockProductsService.setTheme).toHaveBeenCalledWith("dark-theme");
    });

    it("should switch the theme from dark to light and call `setTheme`", () => {
      mockProductsService.getTheme.mockReturnValue("dark-theme");

      component.toggleTheme();

      expect(mockProductsService.getTheme).toHaveBeenCalledTimes(1);
      expect(mockProductsService.setTheme).toHaveBeenCalledWith("light-theme");
    });
  });
});
