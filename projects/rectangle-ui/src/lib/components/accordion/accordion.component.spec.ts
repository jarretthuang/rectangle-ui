import { ComponentFixture, TestBed } from "@angular/core/testing";
import { AccordionComponent } from "./accordion.component";
describe("AccordionComponent", () => {
  let component: AccordionComponent;
  let fixture: ComponentFixture<AccordionComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [AccordionComponent] }).compileComponents();
    fixture = TestBed.createComponent(AccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it("should create", () => expect(component).toBeTruthy());
  it("should toggle open index", () => {
    component.toggle(0);
    expect(component.openIndex()).toBe(0);
    component.toggle(0);
    expect(component.openIndex()).toBe(-1);
  });
});
