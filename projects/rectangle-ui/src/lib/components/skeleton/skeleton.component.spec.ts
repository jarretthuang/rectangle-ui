import { ComponentFixture, TestBed } from "@angular/core/testing";
import { SkeletonComponent } from "./skeleton.component";

describe("SkeletonComponent", () => {
  let component: SkeletonComponent; let fixture: ComponentFixture<SkeletonComponent>;
  beforeEach(async () => { await TestBed.configureTestingModule({ imports: [SkeletonComponent] }).compileComponents(); fixture = TestBed.createComponent(SkeletonComponent); component = fixture.componentInstance; fixture.detectChanges(); });
  it("should create", () => expect(component).toBeTruthy());
  it("should render default dimensions", () => { const el: HTMLDivElement = fixture.nativeElement.querySelector("div"); const style = el.getAttribute("style") ?? ""; expect(style).toContain("width: 100%"); expect(style).toContain("height: 1rem"); });
});
