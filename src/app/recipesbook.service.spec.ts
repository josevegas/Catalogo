import { TestBed } from '@angular/core/testing';

import { RecipesbookService } from './recipesbook.service';

describe('RecipesbookService', () => {
  let service: RecipesbookService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecipesbookService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
