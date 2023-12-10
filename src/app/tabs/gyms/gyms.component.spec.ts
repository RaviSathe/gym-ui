import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GymsComponent } from './gyms.component';

describe('GymsComponent', () => {
  let component: GymsComponent;
  let fixture: ComponentFixture<GymsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GymsComponent]
    });
    fixture = TestBed.createComponent(GymsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
