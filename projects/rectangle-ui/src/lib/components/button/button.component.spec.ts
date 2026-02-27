import { Component } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ButtonComponent } from "./button.component";

@Component({
  template: `<rui-button disabled>Disabled</rui-button>`,
  imports: [ButtonComponent],
})
class HostDisabledButtonComponent {}

describe("ButtonComponent", () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should use primary variant by default", () => {
    const classes = (component as any).styleClasses.join(" ");
    expect(classes).toContain("border-primary-400");
    expect(classes).toContain("bg-primary-100");
  });

  it("should apply secondary variant classes", () => {
    component.variant = "secondary";

    const classes = (component as any).styleClasses.join(" ");
    expect(classes).toContain("border-primary-300");
    expect(classes).toContain("bg-transparent");
  });

  it("should apply danger variant classes", () => {
    component.variant = "danger";

    const classes = (component as any).styleClasses.join(" ");
    expect(classes).toContain("border-red-300");
    expect(classes).toContain("text-red-700");
  });

  it("should fallback to primary classes for unsupported variants", () => {
    (component as any).variant = "mystery";

    const classes = (component as any).styleClasses.join(" ");
    expect(classes).toContain("border-primary-400");
    expect(classes).toContain("bg-primary-100");
    expect(classes).not.toContain("undefined");
  });

  it("should coerce disabled attribute to true", () => {
    const hostFixture = TestBed.createComponent(HostDisabledButtonComponent);
    hostFixture.detectChanges();

    const button: HTMLButtonElement = hostFixture.nativeElement.querySelector("button");
    expect(button.disabled).toBeTrue();
  });

  it("should gate hover/active styles behind enabled state", () => {
    const classes = (component as any).styleClasses.join(" ");

    expect(classes).toContain("enabled:hover:bg-primary-200");
    expect(classes).toContain("enabled:active:bg-primary-200");
    expect(classes).not.toContain(" hover:bg-primary-200");
    expect(classes).not.toContain(" active:bg-primary-200");
  });
});
