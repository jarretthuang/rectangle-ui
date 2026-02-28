import { ComponentFixture, TestBed } from "@angular/core/testing";
import { NavbarListComponent } from "./navbar.list.component";
import { provideRouter } from "@angular/router";

describe("NavbarListComponent", () => {
  let fixture: ComponentFixture<NavbarListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarListComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(NavbarListComponent);
    fixture.detectChanges();
  });

  it("should render component links sorted by name", () => {
    const items = fixture.nativeElement.querySelectorAll("ul:nth-of-type(2) li") as NodeListOf<HTMLLIElement>;
    const componentNames = Array.from(items).map((item) => item.textContent?.trim() ?? "");

    const sortedNames = [...componentNames].sort((a, b) => a.localeCompare(b));
    expect(componentNames).toEqual(sortedNames);
  });
});
