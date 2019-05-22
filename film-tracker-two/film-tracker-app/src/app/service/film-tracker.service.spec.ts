import { TestBed } from '@angular/core/testing';

import { FilmTrackerService } from './film-tracker.service';

describe('FilmTrackerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FilmTrackerService = TestBed.get(FilmTrackerService);
    expect(service).toBeTruthy();
  });
});
