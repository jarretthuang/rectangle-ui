import { ComponentFixture, TestBed } from "@angular/core/testing";
import { AccordionComponent } from "./accordion.component";

describe("AccordionComponent", () => {
  let component: AccordionComponent;
  let fixture: ComponentFixture<AccordionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [AccordionComponent] }).compileComponents();
    fixture = TestBed.createComponent(AccordionComponent);
    component = fixture.componentInstance;
    component.items = [
      { title: "First item", content: "First content" },
      { title: "Second item", content: "Second content" },
    ];
    fixture.detectChanges();
  });

  it("should create", () => expect(component).toBeTruthy());

  it("should toggle open index", () => {
    component.toggle(0);
    expect(component.openIndex()).toBe(0);
    component.toggle(0);
    expect(component.openIndex()).toBe(-1);
  });

  it("should wire accessible trigger and panel attributes", () => {
    const buttons = fixture.nativeElement.querySelectorAll("button");

    expect(buttons[0].getAttribute("aria-expanded")).toBe("false");

    component.toggle(0);
    fixture.detectChanges();

    const panel = fixture.nativeElement.querySelector("[role='region']");

    expect(buttons[0].getAttribute("aria-expanded")).toBe("true");
    expect(buttons[0].getAttribute("aria-controls")).toBe(panel.id);
    expect(panel.getAttribute("aria-labelledby")).toBe(buttons[0].id);
  });
});
