import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchedComponentsComponent } from './searched-components.component';

describe('SearchedComponentsComponent', () => {
  let component: SearchedComponentsComponent;
  let fixture: ComponentFixture<SearchedComponentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchedComponentsComponent]
    });
    fixture = TestBed.createComponent(SearchedComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
