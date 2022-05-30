import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentsuccessredirectcentComponent } from './paymentsuccessredirectcent.component';

describe('PaymentsuccessredirectcentComponent', () => {
  let component: PaymentsuccessredirectcentComponent;
  let fixture: ComponentFixture<PaymentsuccessredirectcentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentsuccessredirectcentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentsuccessredirectcentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
