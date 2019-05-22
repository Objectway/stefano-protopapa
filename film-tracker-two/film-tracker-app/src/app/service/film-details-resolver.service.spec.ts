import { TestBed } from '@angular/core/testing';

import { FilmDetailsResolverService } from './film-details-resolver.service';

describe('FilmDetailsResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FilmDetailsResolverService = TestBed.get(FilmDetailsResolverService);
    expect(service).toBeTruthy();
  });
});
