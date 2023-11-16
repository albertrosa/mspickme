import { TestBed } from '@angular/core/testing';

import { ClassNamesService } from './class-names.service';

describe('ClassNamesService', () => {
  let service: ClassNamesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClassNamesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
