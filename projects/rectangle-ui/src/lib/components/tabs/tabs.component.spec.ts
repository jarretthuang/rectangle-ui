import { ComponentFixture, TestBed } from "@angular/core/testing";
import { TabsComponent } from "./tabs.component";
describe("TabsComponent", () => {
  let component: TabsComponent;
  let fixture: ComponentFixture<TabsComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [TabsComponent] }).compileComponents();
    fixture = TestBed.createComponent(TabsComponent);
    component = fixture.componentInstance;
    component.tabs = [{ label: "Overview", value: "overview" }];
    fixture.detectChanges();
  });
  it("should create", () => expect(component).toBeTruthy());
  it("should set active tab", () => {
    component.active.set("usage");
    expect(component.active()).toBe("usage");
  });

  it("should include hover styles on tab buttons", () => {
    const button: HTMLButtonElement = fixture.nativeElement.querySelector("button");
    expect(button).toBeTruthy();
    expect(button.className).toContain("hover:bg-primary-200");
    expect(button.className).toContain("dark:hover:bg-primary-800");
  });

});
