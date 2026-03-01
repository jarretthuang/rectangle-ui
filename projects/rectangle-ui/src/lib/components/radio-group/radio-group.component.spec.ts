import { ComponentFixture, TestBed } from "@angular/core/testing";
import { RadioGroupComponent } from "./radio-group.component";

describe("RadioGroupComponent", () => {
  let component: RadioGroupComponent;
  let fixture: ComponentFixture<RadioGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [RadioGroupComponent] }).compileComponents();
    fixture = TestBed.createComponent(RadioGroupComponent);
    component = fixture.componentInstance;
    component.options = [
      { label: "A", value: "a" },
      { label: "B", value: "b" },
    ];
    fixture.detectChanges();
  });

  it("should create", () => expect(component).toBeTruthy());

  it("should set selected value", () => {
    component.value.set("b");
    expect(component.value()).toBe("b");
  });

  it("should set a fallback native name", () => {
    const input: HTMLInputElement = fixture.nativeElement.querySelector("input[type='radio']");
    expect(input.name).toContain("rui-radio-group-");
  });



  it("should generate unique fallback names per component instance", () => {
    const secondFixture = TestBed.createComponent(RadioGroupComponent);
    secondFixture.componentInstance.options = [
      { label: "A", value: "a" },
      { label: "B", value: "b" },
    ];
    secondFixture.detectChanges();

    const firstInput: HTMLInputElement = fixture.nativeElement.querySelector("input[type='radio']");
    const secondInput: HTMLInputElement = secondFixture.nativeElement.querySelector("input[type='radio']");

    expect(firstInput.name).not.toBe(secondInput.name);
  });

  it("should bind option value to native input value", () => {
    const input: HTMLInputElement = fixture.nativeElement.querySelector("input[type='radio']");
    expect(input.value).toBe("a");
  });

  it("should use provided name when set", () => {
    const namedFixture = TestBed.createComponent(RadioGroupComponent);
    namedFixture.componentInstance.name = "shipping-method";
    namedFixture.componentInstance.options = [{ label: "A", value: "a" }];
    namedFixture.detectChanges();

    const input: HTMLInputElement = namedFixture.nativeElement.querySelector("input[type='radio']");
    expect(input.name).toBe("shipping-method");
  });
});
