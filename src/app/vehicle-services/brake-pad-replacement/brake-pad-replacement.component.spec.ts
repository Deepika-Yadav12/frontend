import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrakePadReplacementComponent } from './brake-pad-replacement.component';

describe('BrakePadReplacementComponent', () => {
  let component: BrakePadReplacementComponent;
  let fixture: ComponentFixture<BrakePadReplacementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BrakePadReplacementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrakePadReplacementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
