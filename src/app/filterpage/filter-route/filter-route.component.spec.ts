import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterRouteComponent } from './filter-route.component';

describe('FilterRouteComponent', () => {
  let component: FilterRouteComponent;
  let fixture: ComponentFixture<FilterRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterRouteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
