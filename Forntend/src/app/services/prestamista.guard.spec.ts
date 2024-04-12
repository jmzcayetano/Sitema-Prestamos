import { TestBed } from '@angular/core/testing';

import { PrestamistaGuard } from './prestamista.guard';

describe('PrestamistaGuard', () => {
  let guard: PrestamistaGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PrestamistaGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
