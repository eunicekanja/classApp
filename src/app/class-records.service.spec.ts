import { TestBed } from '@angular/core/testing';

import { ClassRecordsService } from './class-records.service';

describe('ClassRecordsService', () => {
  let service: ClassRecordsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClassRecordsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
