import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDeliveryAddComponent } from './edit-delivery-add.component';

describe('EditDeliveryAddComponent', () => {
  let component: EditDeliveryAddComponent;
  let fixture: ComponentFixture<EditDeliveryAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditDeliveryAddComponent]
    });
    fixture = TestBed.createComponent(EditDeliveryAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
