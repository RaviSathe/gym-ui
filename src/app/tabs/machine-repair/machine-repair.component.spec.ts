import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MachineRepairComponent } from './machine-repair.component';

describe('MachineRepairComponent', () => {
  let component: MachineRepairComponent;
  let fixture: ComponentFixture<MachineRepairComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MachineRepairComponent]
    });
    fixture = TestBed.createComponent(MachineRepairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
