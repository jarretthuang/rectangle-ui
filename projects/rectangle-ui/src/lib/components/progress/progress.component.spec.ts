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
    component.value = 200;
    component.max = 100;
    fixture.detectChanges();

    expect((component as unknown as { width: string }).width).toBe("100%");
  });

  it("should return 0% when max is non-positive", () => {
    component.value = 50;
    component.max = 0;
    fixture.detectChanges();

    expect((component as unknown as { width: string }).width).toBe("0%");
  });

  it("should return 0% when value is NaN", () => {
    component.value = Number.NaN;
    component.max = 100;
    fixture.detectChanges();

    expect((component as unknown as { width: string }).width).toBe("0%");
  });

  it("should return 0% when max is NaN", () => {
    component.value = 50;
    component.max = Number.NaN;
    fixture.detectChanges();

    expect((component as unknown as { width: string }).width).toBe("0%");
  });

});
