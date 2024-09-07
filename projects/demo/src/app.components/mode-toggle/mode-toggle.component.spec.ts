import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeToggleComponent } from './mode-toggle.component';

describe('ModeToggleComponent', () => {
  let component: ModeToggleComponent;
  let fixture: ComponentFixture<ModeToggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModeToggleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModeToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
