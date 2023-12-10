import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GymEquipmentComponent } from './gym-equipment.component';

describe('GymEquipmentComponent', () => {
  let component: GymEquipmentComponent;
  let fixture: ComponentFixture<GymEquipmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GymEquipmentComponent]
    });
    fixture = TestBed.createComponent(GymEquipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
