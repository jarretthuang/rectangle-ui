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

  it("should render an alert region by default", () => {
    const alertElement: HTMLElement = fixture.nativeElement.querySelector("[role='alert']");

    expect(alertElement).not.toBeNull();
    expect(alertElement.className).toContain("border-primary-300");
  });

  it("should apply success classes", () => {
    component.variant = "success";

    const classes = (component as unknown as { classes: string[] }).classes.join(" ");

    expect(classes).toContain("emerald");
  });
});
