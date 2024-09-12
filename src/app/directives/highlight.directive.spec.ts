import { HighlightDirective } from "./highlight.directive";
import { ElementRef } from "@angular/core";

describe("HighlightDirective", () => {
  let directive: HighlightDirective;
  let mockElementRef: ElementRef;

  beforeEach(() => {
    mockElementRef = {
      nativeElement: document.createElement("div"),
    } as ElementRef;

    directive = new HighlightDirective(mockElementRef);
  });

  it("should create an instance", () => {
    expect(directive).toBeTruthy();
  });

  it("should apply background color #CCD5AE to the element", () => {
    expect(mockElementRef.nativeElement.style.backgroundColor).toBe(
      "rgb(204, 213, 174)",
    );
  });
});
