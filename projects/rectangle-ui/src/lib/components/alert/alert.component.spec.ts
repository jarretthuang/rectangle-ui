import { ComponentFixture, TestBed } from "@angular/core/testing";
import { AlertComponent } from "./alert.component";

describe("AlertComponent", () => {
  let component: AlertComponent;
  let fixture: ComponentFixture<AlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [AlertComponent] }).compileComponents();
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

  it("should apply success classes and icon", () => {
    component.variant = "success";
    fixture.detectChanges();

    const classes = (component as unknown as { classes: string[] }).classes.join(" ");
    const icon = (component as unknown as { icon: string }).icon;

    expect(classes).toContain("emerald");
    expect(icon).toContain("<svg");
  });
});
