import { TestBed } from '@angular/core/testing';

import { PickerTrackerService } from './picker-tracker.service';

describe('PickerTrackerService', () => {
  let service: PickerTrackerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PickerTrackerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
