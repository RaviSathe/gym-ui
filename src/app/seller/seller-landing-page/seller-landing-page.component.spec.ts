import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerLandingPageComponent } from './seller-landing-page.component';

describe('SellerLandingPageComponent', () => {
  let component: SellerLandingPageComponent;
  let fixture: ComponentFixture<SellerLandingPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SellerLandingPageComponent]
    });
    fixture = TestBed.createComponent(SellerLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
