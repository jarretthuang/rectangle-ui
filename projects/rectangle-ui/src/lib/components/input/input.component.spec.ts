import { Component } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { InputComponent } from "./input.component";

@Component({
  template: `<rui-input disabled></rui-input>`,
  imports: [InputComponent],
})
class HostDisabledInputComponent {}

describe("InputComponent", () => {
  let component: InputComponent;
  let fixture: ComponentFixture<InputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should update value model on input", () => {
    const input: HTMLInputElement = fixture.nativeElement.querySelector("input");

    input.value = "hello@rectangle.dev";
    input.dispatchEvent(new Event("input"));
    fixture.detectChanges();

    expect(component.value()).toBe("hello@rectangle.dev");
  });

  it("should clear value when clear button is clicked", () => {
    const input: HTMLInputElement = fixture.nativeElement.querySelector("input");

    input.value = "hello@rectangle.dev";
    input.dispatchEvent(new Event("input"));
    fixture.detectChanges();

    const clearButton: HTMLButtonElement = fixture.nativeElement.querySelector('button[aria-label="Clear input"]');
    clearButton.click();
    fixture.detectChanges();

    expect(component.value()).toBe("");
  });

  it("should coerce disabled attribute to true", () => {
    const hostFixture = TestBed.createComponent(HostDisabledInputComponent);
    hostFixture.detectChanges();

    const input: HTMLInputElement = hostFixture.nativeElement.querySelector("input");
    expect(input.disabled).toBeTrue();
  });
});
