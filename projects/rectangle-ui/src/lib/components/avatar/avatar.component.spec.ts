import { ComponentFixture, TestBed } from "@angular/core/testing";
import { AvatarComponent } from "./avatar.component";
describe("AvatarComponent", () => {
  let component: AvatarComponent;
  let fixture: ComponentFixture<AvatarComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [AvatarComponent] }).compileComponents();
    fixture = TestBed.createComponent(AvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it("should create", () => expect(component).toBeTruthy());
  it("should render default fallback", () => {
    expect(fixture.nativeElement.textContent).toContain("?");
  });

  it("should render fallback when image fails to load", () => {
    component.src = "https://example.com/broken.png";
    fixture.detectChanges();

    (component as unknown as { onImageError: () => void }).onImageError();
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector("img")).toBeNull();
    expect(fixture.nativeElement.querySelector("span")).not.toBeNull();
  });

});
