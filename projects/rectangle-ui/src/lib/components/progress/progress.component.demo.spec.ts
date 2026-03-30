import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ProgressDemoComponent } from "./progress.component.demo";

describe("ProgressDemoComponent", () => {
  let fixture: ComponentFixture<ProgressDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [ProgressDemoComponent] }).compileComponents();
    fixture = TestBed.createComponent(ProgressDemoComponent);
    fixture.detectChanges();
  });

  it("should render as a full-width demo host", () => {
    expect(fixture.nativeElement.className).toContain("block");
    expect(fixture.nativeElement.className).toContain("w-full");
    expect(fixture.nativeElement.className).toContain("max-w-md");
  });

  it("should render three progress bars", () => {
    expect(fixture.nativeElement.querySelectorAll("rui-progress").length).toBe(3);
  });
});
