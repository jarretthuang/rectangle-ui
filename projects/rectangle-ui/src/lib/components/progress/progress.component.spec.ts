import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ProgressComponent } from "./progress.component";

describe("ProgressComponent", () => {
  let component: ProgressComponent; let fixture: ComponentFixture<ProgressComponent>;
  beforeEach(async () => { await TestBed.configureTestingModule({ imports: [ProgressComponent] }).compileComponents(); fixture = TestBed.createComponent(ProgressComponent); component = fixture.componentInstance; fixture.detectChanges(); });
  it("should create", () => expect(component).toBeTruthy());
  it("should clamp value and compute width", () => { component.value = 200; component.max = 100; fixture.detectChanges(); expect((component as unknown as { width: string }).width).toBe("100%"); });
});
