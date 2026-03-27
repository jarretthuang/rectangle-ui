import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ProgressComponent } from "./progress.component";

describe("ProgressComponent", () => {
  let component: ProgressComponent;
  let fixture: ComponentFixture<ProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [ProgressComponent] }).compileComponents();
    fixture = TestBed.createComponent(ProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => expect(component).toBeTruthy());

  it("should clamp value and compute width", () => {
    fixture.componentRef.setInput("value", 200);
    fixture.componentRef.setInput("max", 100);
    fixture.detectChanges();

    expect((component as unknown as { width: string }).width).toBe("100%");
  });

  it("should return 0% when value is NaN", () => {
    fixture.componentRef.setInput("value", Number.NaN);
    fixture.componentRef.setInput("max", 100);
    fixture.detectChanges();

    expect((component as unknown as { width: string }).width).toBe("0%");
  });

  it("should fall back to a safe max when max is non-positive", () => {
    fixture.componentRef.setInput("value", 50);
    fixture.componentRef.setInput("max", 0);
    fixture.detectChanges();

    expect((component as unknown as { safeMax: number }).safeMax).toBe(100);
    expect((component as unknown as { width: string }).width).toBe("50%");
  });

  it("should expose clamped progressbar aria values", () => {
    fixture.componentRef.setInput("value", 120);
    fixture.componentRef.setInput("max", 80);
    fixture.detectChanges();

    const progressbar: HTMLDivElement = fixture.nativeElement.querySelector('[role="progressbar"]');
    expect(progressbar.getAttribute("aria-valuemin")).toBe("0");
    expect(progressbar.getAttribute("aria-valuemax")).toBe("80");
    expect(progressbar.getAttribute("aria-valuenow")).toBe("80");
  });

  it("should render as a full-width block host", () => {
    expect(fixture.nativeElement.className).toContain("block");
    expect(fixture.nativeElement.className).toContain("w-full");
  });
});
