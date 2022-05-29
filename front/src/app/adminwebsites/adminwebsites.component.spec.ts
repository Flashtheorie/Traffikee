import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminwebsitesComponent } from './adminwebsites.component';

describe('AdminwebsitesComponent', () => {
  let component: AdminwebsitesComponent;
  let fixture: ComponentFixture<AdminwebsitesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminwebsitesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminwebsitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
