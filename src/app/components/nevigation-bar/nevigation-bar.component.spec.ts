import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NevigationBarComponent } from './nevigation-bar.component';

describe('NevigationBarComponent', () => {
  let component: NevigationBarComponent;
  let fixture: ComponentFixture<NevigationBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NevigationBarComponent]
    });
    fixture = TestBed.createComponent(NevigationBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
