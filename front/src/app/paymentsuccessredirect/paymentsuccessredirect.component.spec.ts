import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentsuccessredirectComponent } from './paymentsuccessredirect.component';

describe('PaymentsuccessredirectComponent', () => {
  let component: PaymentsuccessredirectComponent;
  let fixture: ComponentFixture<PaymentsuccessredirectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentsuccessredirectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentsuccessredirectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
