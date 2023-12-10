import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtineComponent } from './protine.component';

describe('ProtineComponent', () => {
  let component: ProtineComponent;
  let fixture: ComponentFixture<ProtineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProtineComponent]
    });
    fixture = TestBed.createComponent(ProtineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
