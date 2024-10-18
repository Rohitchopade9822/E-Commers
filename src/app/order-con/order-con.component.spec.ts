import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderConComponent } from './order-con.component';

describe('OrderConComponent', () => {
  let component: OrderConComponent;
  let fixture: ComponentFixture<OrderConComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderConComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderConComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
