import { ComponentFixture, TestBed } from "@angular/core/testing";
import { TabsComponent } from "./tabs.component";
describe("TabsComponent",()=>{let component:TabsComponent;let fixture:ComponentFixture<TabsComponent>;beforeEach(async()=>{await TestBed.configureTestingModule({imports:[TabsComponent]}).compileComponents();fixture=TestBed.createComponent(TabsComponent);component=fixture.componentInstance;fixture.detectChanges();});it("should create",()=>expect(component).toBeTruthy());it("should set active tab",()=>{component.active.set("usage");expect(component.active()).toBe("usage");});});
