import { TestBed } from '@angular/core/testing';

import { MediumBlogService } from './medium-blog.service';

describe('MediumBlogService', () => {
  let service: MediumBlogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MediumBlogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
