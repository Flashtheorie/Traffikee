import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentsuccessredirectmilleComponent } from './paymentsuccessredirectmille.component';

describe('PaymentsuccessredirectmilleComponent', () => {
  let component: PaymentsuccessredirectmilleComponent;
  let fixture: ComponentFixture<PaymentsuccessredirectmilleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentsuccessredirectmilleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentsuccessredirectmilleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
