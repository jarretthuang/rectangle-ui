import { ComponentFixture, TestBed } from "@angular/core/testing";
import { DropdownComponent } from "./dropdown.component";

describe("DropdownComponent", () => {
  let component: DropdownComponent;
  let fixture: ComponentFixture<DropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DropdownComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should use placeholder text style when no value is selected", () => {
    const label: HTMLSpanElement = fixture.nativeElement.querySelector("button span");

    expect(label.textContent?.trim()).toBe("Select an option");
    expect(label.classList.contains("text-primary-700/70")).toBeTrue();
    expect(label.classList.contains("dark:text-primary-300/70")).toBeTrue();
  });

  it("should remove placeholder text style when a value is selected", () => {
    component.selectedItem.set({ id: "1", label: "Pikachu" });
    fixture.detectChanges();

    const label: HTMLSpanElement = fixture.nativeElement.querySelector("button span");

    expect(label.textContent?.trim()).toBe("Pikachu");
    expect(label.classList.contains("text-primary-700/70")).toBeFalse();
    expect(label.classList.contains("dark:text-primary-300/70")).toBeFalse();
  });

  it("should render and support the empty option by default", () => {
    component.selectedItem.set({ id: "1", label: "Pikachu" });
    component.isExpanded = true;
    fixture.detectChanges();

    const clearButton: HTMLButtonElement = fixture.nativeElement.querySelector('button[aria-label="Clear selection"]');
    expect(clearButton).toBeTruthy();
    expect(clearButton.textContent?.trim()).toBe("None");

    clearButton.click();
    fixture.detectChanges();

    expect(component.selectedItem()).toBeUndefined();
    expect(component.isExpanded).toBeFalse();
  });

  it("should hide the empty option when required=true", () => {
    component.required = true;
    component.isExpanded = true;
    fixture.detectChanges();

    const clearButton: HTMLButtonElement | null = fixture.nativeElement.querySelector('button[aria-label="Clear selection"]');
    expect(clearButton).toBeNull();
  });
});
