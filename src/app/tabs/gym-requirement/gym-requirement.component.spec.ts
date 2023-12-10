import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GymRequirementComponent } from './gym-requirement.component';

describe('GymRequirementComponent', () => {
  let component: GymRequirementComponent;
  let fixture: ComponentFixture<GymRequirementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GymRequirementComponent]
    });
    fixture = TestBed.createComponent(GymRequirementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
