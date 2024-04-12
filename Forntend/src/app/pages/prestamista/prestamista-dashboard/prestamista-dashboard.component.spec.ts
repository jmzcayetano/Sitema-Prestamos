import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestamistaDashboardComponent } from './prestamista-dashboard.component';

describe('PrestamistaDashboardComponent', () => {
  let component: PrestamistaDashboardComponent;
  let fixture: ComponentFixture<PrestamistaDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrestamistaDashboardComponent ]
    })
    .compileComponents();
  });
    beforeEach(() => {
    fixture = TestBed.createComponent(PrestamistaDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
