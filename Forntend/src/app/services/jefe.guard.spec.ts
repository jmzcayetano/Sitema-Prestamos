import { TestBed } from '@angular/core/testing';

import { JefeGuard } from './jefe.guard';

describe('JefeGuard', () => {
  let guard: JefeGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(JefeGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
