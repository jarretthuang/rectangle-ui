import { Component } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { AlertComponent } from "./alert.component";

@Component({
  standalone: true,
  imports: [AlertComponent],
  template: `<rui-alert><p>Projected block content</p></rui-alert>`,
})
class TestHostComponent {}

describe("AlertComponent", () => {
  let component: AlertComponent;
  let fixture: ComponentFixture<AlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [AlertComponent, TestHostComponent] }).compileComponents();
    fixture = TestBed.createComponent(AlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => expect(component).toBeTruthy());

  it("should render an alert region with an icon by default", () => {
    const alertElement: HTMLElement = fixture.nativeElement.querySelector("[role='alert']");
    const iconElement: HTMLElement = fixture.nativeElement.querySelector("rui-icon");

    expect(alertElement).not.toBeNull();
    expect(alertElement.className).toContain("border-primary-300");
    expect(alertElement.className).toContain("gap-2");
    expect(iconElement).not.toBeNull();
  });

  it("should wrap projected content in a block container", () => {
    const hostFixture = TestBed.createComponent(TestHostComponent);
    hostFixture.detectChanges();

    const contentWrapper: HTMLElement | null = hostFixture.nativeElement.querySelector("[role='alert'] > div");
    const projectedParagraph: HTMLElement | null = hostFixture.nativeElement.querySelector("[role='alert'] p");

    expect(contentWrapper).not.toBeNull();
    expect(contentWrapper?.className).toContain("flex-1");
    expect(projectedParagraph?.parentElement).toBe(contentWrapper);
  });

  it("should apply success classes and icon", () => {
    component.variant = "success";
    fixture.detectChanges();

    const classes = (component as unknown as { classes: string[] }).classes.join(" ");
    const icon = (component as unknown as { icon: string }).icon;

    expect(classes).toContain("emerald");
    expect(icon).toContain("<svg");
  });
});
