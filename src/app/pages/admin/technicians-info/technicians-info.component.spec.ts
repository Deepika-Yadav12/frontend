import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechniciansInfoComponent } from './technicians-info.component';

describe('TechniciansInfoComponent', () => {
  let component: TechniciansInfoComponent;
  let fixture: ComponentFixture<TechniciansInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TechniciansInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechniciansInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
