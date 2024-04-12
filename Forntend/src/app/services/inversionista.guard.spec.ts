import { TestBed } from '@angular/core/testing';

import { InversionistaGuard } from './inversionista.guard';

describe('InversionistaGuard', () => {
  let guard: InversionistaGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(InversionistaGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
