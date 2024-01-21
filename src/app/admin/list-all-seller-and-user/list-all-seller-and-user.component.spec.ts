import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAllSellerAndUserComponent } from './list-all-seller-and-user.component';

describe('ListAllSellerAndUserComponent', () => {
  let component: ListAllSellerAndUserComponent;
  let fixture: ComponentFixture<ListAllSellerAndUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListAllSellerAndUserComponent]
    });
    fixture = TestBed.createComponent(ListAllSellerAndUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
