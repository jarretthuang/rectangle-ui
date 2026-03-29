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
    fixture.componentRef.setInput("page", 2);
    fixture.componentRef.setInput("totalPages", 6);
    fixture.detectChanges();

    component.go(3);

    expect(component.pageChange.emit).toHaveBeenCalledWith(3);
  });

  it("should clamp page changes to totalPages", () => {
    spyOn(component.pageChange, "emit");
    fixture.componentRef.setInput("page", 5);
    fixture.componentRef.setInput("totalPages", 2);
    fixture.detectChanges();

    component.go(4);

    expect(component.pageChange.emit).toHaveBeenCalledWith(2);
  });

  it("should render clamped page text and disable the next button on the last page", () => {
    fixture.componentRef.setInput("page", 5);
    fixture.componentRef.setInput("totalPages", 2);
    fixture.detectChanges();

    const buttons = fixture.nativeElement.querySelectorAll("button");
    const pageSummary = fixture.nativeElement.querySelector("span");

    expect(pageSummary.textContent.trim()).toBe("Page 2 of 2");
    expect(buttons[1].disabled).toBeTrue();
    expect(buttons[1].getAttribute("aria-label")).toBe("Next page");
  });
});
