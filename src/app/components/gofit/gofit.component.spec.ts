import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GofitComponent } from './gofit.component';

describe('GofitComponent', () => {
  let component: GofitComponent;
  let fixture: ComponentFixture<GofitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GofitComponent]
    });
    fixture = TestBed.createComponent(GofitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
