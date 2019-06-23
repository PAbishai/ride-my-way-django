import { TestBed } from '@angular/core/testing';

import { MatSnackbarService } from './mat-snackbar.service';

describe('MatSnackbarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MatSnackbarService = TestBed.get(MatSnackbarService);
    expect(service).toBeTruthy();
  });
});
