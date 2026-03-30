import { ComponentFixture, TestBed } from "@angular/core/testing";
import { BreadcrumbComponent } from "./breadcrumb.component";

describe("BreadcrumbComponent", () => {
  let component: BreadcrumbComponent;
  let fixture: ComponentFixture<BreadcrumbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [BreadcrumbComponent] }).compileComponents();

    fixture = TestBed.createComponent(BreadcrumbComponent);
    component = fixture.componentInstance;
    component.items = [
      { label: "Home", href: "/" },
      { label: "Components", href: "/components" },
      { label: "Breadcrumb" },
    ];
    fixture.detectChanges();
  });

  it("should create", () => expect(component).toBeTruthy());

  it("renders non-terminal items as links", () => {
    const links = Array.from(fixture.nativeElement.querySelectorAll("a")) as HTMLAnchorElement[];

    expect(links.map((link) => link.textContent?.trim())).toEqual(["Home", "Components"]);
    expect(links.map((link) => link.getAttribute("href"))).toEqual(["/", "/components"]);
  });

  it("marks the current page for assistive tech", () => {
    const currentPage: HTMLSpanElement | null = fixture.nativeElement.querySelector(
      '[aria-current="page"]'
    );

    expect(currentPage?.textContent?.trim()).toBe("Breadcrumb");
  });
});
