import { ComponentFixture, TestBed } from "@angular/core/testing";
import { TextareaComponent } from "./textarea.component";

describe("TextareaComponent", () => {
  let component: TextareaComponent;
  let fixture: ComponentFixture<TextareaComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [TextareaComponent] }).compileComponents();
    fixture = TestBed.createComponent(TextareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it("should create", () => expect(component).toBeTruthy());
  it("should update model on input", () => {
    const textarea: HTMLTextAreaElement = fixture.nativeElement.querySelector("textarea");
    textarea.value = "hello";
    textarea.dispatchEvent(new Event("input"));
    expect(component.value()).toBe("hello");
  });

  it("should keep textarea resize constrained vertically", () => {
    const textarea: HTMLTextAreaElement = fixture.nativeElement.querySelector("textarea");

    expect(textarea.className).toContain("resize-y");
    expect(textarea.className).toContain("max-h-80");
  });
});
