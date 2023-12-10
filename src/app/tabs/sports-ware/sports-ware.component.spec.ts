import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportsWareComponent } from './sports-ware.component';

describe('SportsWareComponent', () => {
  let component: SportsWareComponent;
  let fixture: ComponentFixture<SportsWareComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SportsWareComponent]
    });
    fixture = TestBed.createComponent(SportsWareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
