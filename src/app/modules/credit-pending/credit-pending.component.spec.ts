import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditPendingComponent } from './credit-pending.component';

describe('CreditPendingComponent', () => {
  let component: CreditPendingComponent;
  let fixture: ComponentFixture<CreditPendingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreditPendingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditPendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
