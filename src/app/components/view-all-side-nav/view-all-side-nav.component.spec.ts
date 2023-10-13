import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllSideNavComponent } from './view-all-side-nav.component';

describe('ViewAllSideNavComponent', () => {
  let component: ViewAllSideNavComponent;
  let fixture: ComponentFixture<ViewAllSideNavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewAllSideNavComponent]
    });
    fixture = TestBed.createComponent(ViewAllSideNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
