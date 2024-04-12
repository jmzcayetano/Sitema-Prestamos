import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InversionistaDashboardComponent } from './inversionista-dashboard.component';

describe('InversionistaDashboardComponent', () => {
  let component: InversionistaDashboardComponent;
  let fixture: ComponentFixture<InversionistaDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InversionistaDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InversionistaDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
