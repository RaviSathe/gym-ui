import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerDashBoardComponent } from './seller-dash-board.component';

describe('SellerDashBoardComponent', () => {
  let component: SellerDashBoardComponent;
  let fixture: ComponentFixture<SellerDashBoardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SellerDashBoardComponent]
    });
    fixture = TestBed.createComponent(SellerDashBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
