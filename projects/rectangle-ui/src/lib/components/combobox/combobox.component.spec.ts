import { ComponentFixture, TestBed } from "@angular/core/testing";
import { provideNoopAnimations } from "@angular/platform-browser/animations";
import { ComboboxComponent } from "./combobox.component";

describe("ComboboxComponent", () => {
  let component: ComboboxComponent;
  let fixture: ComponentFixture<ComboboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComboboxComponent],
      providers: [provideNoopAnimations()],
    }).compileComponents();

    fixture = TestBed.createComponent(ComboboxComponent);
    component = fixture.componentInstance;
    component.options = [
      { label: "Angular", value: "angular" },
      { label: "React", value: "react" },
    ];
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should filter options by input query", () => {
    const input: HTMLInputElement = fixture.nativeElement.querySelector("input");

    input.value = "ang";
    input.dispatchEvent(new Event("input"));
    fixture.detectChanges();

    const options = fixture.nativeElement.querySelectorAll("li button");
    expect(options.length).toBe(1);
    expect(options[0].textContent).toContain("Angular");
  });

  it("should set selected option when an option is clicked", () => {
    const input: HTMLInputElement = fixture.nativeElement.querySelector("input");
    input.dispatchEvent(new Event("focus"));
    fixture.detectChanges();

    const option: HTMLButtonElement = fixture.nativeElement.querySelector("li button");
    option.click();
    fixture.detectChanges();

    expect(component.selectedOption()?.value).toBe("angular");
    expect(input.value).toBe("Angular");
  });

  it("should clear query and selection when clear button is clicked", () => {
    const input: HTMLInputElement = fixture.nativeElement.querySelector("input");

    input.value = "React";
    input.dispatchEvent(new Event("input"));
    fixture.detectChanges();

    const clearButton: HTMLButtonElement = fixture.nativeElement.querySelector('button[aria-label="Clear combobox input"]');
    clearButton.click();
    fixture.detectChanges();

    expect(component.selectedOption()).toBeUndefined();
    expect(input.value).toBe("");
  });
});
