import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAccountSideNavComponent } from './my-account-side-nav.component';

describe('MyAccountSideNavComponent', () => {
  let component: MyAccountSideNavComponent;
  let fixture: ComponentFixture<MyAccountSideNavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyAccountSideNavComponent]
    });
    fixture = TestBed.createComponent(MyAccountSideNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
