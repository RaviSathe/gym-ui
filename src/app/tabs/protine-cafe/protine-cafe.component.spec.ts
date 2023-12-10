import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtineCafeComponent } from './protine-cafe.component';

describe('ProtineCafeComponent', () => {
  let component: ProtineCafeComponent;
  let fixture: ComponentFixture<ProtineCafeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProtineCafeComponent]
    });
    fixture = TestBed.createComponent(ProtineCafeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
