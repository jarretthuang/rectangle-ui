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

  it("should generate unique fallback ids for multiple instances with the same items", () => {
    const otherFixture = TestBed.createComponent(AccordionComponent);
    otherFixture.componentInstance.items = component.items;
    otherFixture.detectChanges();

    const buttons = fixture.nativeElement.querySelectorAll("button");
    const panels = fixture.nativeElement.querySelectorAll("[role='region']");
    const otherButtons = otherFixture.nativeElement.querySelectorAll("button");
    const otherPanels = otherFixture.nativeElement.querySelectorAll("[role='region']");

    expect(buttons[0].id).not.toBe(otherButtons[0].id);
    expect(buttons[1].id).not.toBe(otherButtons[1].id);
    expect(panels[0].id).not.toBe(otherPanels[0].id);
    expect(panels[1].id).not.toBe(otherPanels[1].id);

    expect(buttons[0].getAttribute("aria-controls")).toBe(panels[0].id);
    expect(otherButtons[0].getAttribute("aria-controls")).toBe(otherPanels[0].id);
    expect(panels[0].getAttribute("aria-labelledby")).toBe(buttons[0].id);
    expect(otherPanels[0].getAttribute("aria-labelledby")).toBe(otherButtons[0].id);
  });

  it("should wire accessible trigger and panel attributes for collapsed and expanded items", () => {
    const buttons = fixture.nativeElement.querySelectorAll("button");
    const panels = fixture.nativeElement.querySelectorAll("[role='region']");

    expect(buttons[0].getAttribute("aria-expanded")).toBe("false");
    expect(buttons[0].getAttribute("aria-controls")).toBe(panels[0].id);
    expect(panels[0].getAttribute("aria-labelledby")).toBe(buttons[0].id);
    expect(panels[0].hasAttribute("hidden")).toBe(true);

    component.toggle(0);
    fixture.detectChanges();

    expect(buttons[0].getAttribute("aria-expanded")).toBe("true");
    expect(panels[0].hasAttribute("hidden")).toBe(false);
  });
});
