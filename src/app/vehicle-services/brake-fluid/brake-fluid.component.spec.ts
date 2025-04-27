import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrakeFluidComponent } from './brake-fluid.component';

describe('BrakeFluidComponent', () => {
  let component: BrakeFluidComponent;
  let fixture: ComponentFixture<BrakeFluidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BrakeFluidComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrakeFluidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
