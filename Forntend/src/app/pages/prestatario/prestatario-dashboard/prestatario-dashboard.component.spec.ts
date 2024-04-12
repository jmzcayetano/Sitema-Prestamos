import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestatarioDashboardComponent } from './prestatario-dashboard.component';

describe('PrestatarioDashboardComponent', () => {
  let component: PrestatarioDashboardComponent;
  let fixture: ComponentFixture<PrestatarioDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrestatarioDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrestatarioDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
