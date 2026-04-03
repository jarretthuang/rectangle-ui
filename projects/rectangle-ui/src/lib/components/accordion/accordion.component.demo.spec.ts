import { ComponentFixture, TestBed } from "@angular/core/testing";
import { AccordionDemoComponent } from "./accordion.component.demo";

describe("AccordionDemoComponent", () => {
  let fixture: ComponentFixture<AccordionDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [AccordionDemoComponent] }).compileComponents();
    fixture = TestBed.createComponent(AccordionDemoComponent);
    fixture.detectChanges();
  });

  it("should anchor the demo host to the top while keeping it centered", () => {
    expect(fixture.nativeElement.className).toContain("flex");
    expect(fixture.nativeElement.className).toContain("w-full");
    expect(fixture.nativeElement.className).toContain("justify-center");
    expect(fixture.nativeElement.className).toContain("self-start");
  });

  it("should render the accordion inside a stable-width wrapper", () => {
    const wrapper = fixture.nativeElement.firstElementChild;

    expect(wrapper.className).toContain("w-full");
    expect(wrapper.className).toContain("max-w-md");
    expect(wrapper.querySelector("rui-accordion")).not.toBeNull();
  });
});
