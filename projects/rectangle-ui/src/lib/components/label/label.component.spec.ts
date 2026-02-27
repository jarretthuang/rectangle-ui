import { ComponentFixture, TestBed } from "@angular/core/testing";
import { LabelComponent } from "./label.component";

describe("LabelComponent", () => {
  let component: LabelComponent; let fixture: ComponentFixture<LabelComponent>;
  beforeEach(async () => { await TestBed.configureTestingModule({ imports: [LabelComponent] }).compileComponents(); fixture = TestBed.createComponent(LabelComponent); component = fixture.componentInstance; fixture.detectChanges(); });
  it("should create", () => expect(component).toBeTruthy());
  it("should bind for attribute", () => { component.for = "target"; fixture.detectChanges(); const label: HTMLLabelElement = fixture.nativeElement.querySelector("label"); expect(label.getAttribute("for")).toBe("target"); });
});
