import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDeliveryAddComponent } from './add-delivery-add.component';

describe('AddDeliveryAddComponent', () => {
  let component: AddDeliveryAddComponent;
  let fixture: ComponentFixture<AddDeliveryAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddDeliveryAddComponent]
    });
    fixture = TestBed.createComponent(AddDeliveryAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
