import { ComponentFixture, TestBed } from "@angular/core/testing";
import { TableComponent } from "./table.component";

describe("TableComponent", () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [TableComponent] }).compileComponents();
    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    component.columns = ["Name", "Role"];
    component.rows = [["Avery", "Admin"]];
    fixture.detectChanges();
  });

  it("should create", () => expect(component).toBeTruthy());

  it("should render table sections with supported dark mode classes", () => {
    const tableContainer: HTMLElement = fixture.nativeElement.querySelector("div");
    const thead: HTMLElement = fixture.nativeElement.querySelector("thead");
    const tbody: HTMLElement = fixture.nativeElement.querySelector("tbody");
    const row: HTMLElement = fixture.nativeElement.querySelector("tbody tr");

    expect(tableContainer.className).toContain("dark:bg-primary-900");
    expect(thead.className).toContain("dark:bg-primary-800/80");
    expect(tbody.className).toContain("dark:bg-primary-900");
    expect(tbody.className).not.toContain("dark:bg-primary-950");
    expect(row.className).toContain("dark:even:bg-primary-800/60");
    expect(row.className).toContain("dark:hover:bg-primary-800");
  });
});
