import { TestBed } from '@angular/core/testing';

import { PrestatarioGuard } from './prestatario.guard';

describe('PrestatarioGuard', () => {
  let guard: PrestatarioGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PrestatarioGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
