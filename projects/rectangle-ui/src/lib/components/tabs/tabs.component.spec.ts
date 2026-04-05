import { ComponentFixture, TestBed } from "@angular/core/testing";
import { TabsComponent } from "./tabs.component";

describe("TabsComponent", () => {
  let component: TabsComponent;
  let fixture: ComponentFixture<TabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [TabsComponent] }).compileComponents();

    fixture = TestBed.createComponent(TabsComponent);
    component = fixture.componentInstance;
    component.tabs = [
      { label: "Overview", value: "overview" },
      { label: "Usage", value: "usage" },
      { label: "Billing", value: "billing" },
    ];
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should default to the first tab when the active value is missing", () => {
    expect(component.active()).toBe("overview");
  });

  it("should set active tab on click", () => {
    const buttons = fixture.nativeElement.querySelectorAll("button");

    buttons[1].click();
    fixture.detectChanges();

    expect(component.active()).toBe("usage");
    expect(buttons[1].getAttribute("aria-selected")).toBe("true");
    expect(buttons[1].getAttribute("tabindex")).toBe("0");
  });

  it("should support arrow key navigation", () => {
    const event = new KeyboardEvent("keydown", { key: "ArrowRight" });

    fixture.nativeElement.dispatchEvent(event);
    fixture.detectChanges();

    expect(component.active()).toBe("usage");
  });

  it("should expose tablist semantics", () => {
    const tablist: HTMLElement = fixture.nativeElement.querySelector('[role="tablist"]');
    const button: HTMLButtonElement = fixture.nativeElement.querySelector("button");

    expect(tablist.getAttribute("aria-label")).toBe("Tabs");
    expect(button.getAttribute("role")).toBe("tab");
    expect(button.className).toContain("hover:bg-primary-200");
    expect(button.className).toContain("dark:hover:bg-primary-800");
  });
});
