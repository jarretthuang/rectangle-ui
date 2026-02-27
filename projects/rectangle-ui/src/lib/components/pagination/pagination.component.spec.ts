import { ComponentFixture, TestBed } from "@angular/core/testing";
import { PaginationComponent } from "./pagination.component";
describe("PaginationComponent", () => {
  let component: PaginationComponent;
  let fixture: ComponentFixture<PaginationComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [PaginationComponent] }).compileComponents();
    fixture = TestBed.createComponent(PaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it("should create", () => expect(component).toBeTruthy());
  it("should emit next page", () => {
    spyOn(component.pageChange, "emit");
    component.page = 2;
    component.totalPages = 6;
    component.go(3);
    expect(component.pageChange.emit).toHaveBeenCalledWith(3);
  });
});
