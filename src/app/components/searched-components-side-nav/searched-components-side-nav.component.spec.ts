import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchedComponentsSideNavComponent } from './searched-components-side-nav.component';

describe('SearchedComponentsSideNavComponent', () => {
  let component: SearchedComponentsSideNavComponent;
  let fixture: ComponentFixture<SearchedComponentsSideNavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchedComponentsSideNavComponent]
    });
    fixture = TestBed.createComponent(SearchedComponentsSideNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
