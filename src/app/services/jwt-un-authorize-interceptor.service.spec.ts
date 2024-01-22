import { TestBed } from '@angular/core/testing';

import { JwtUnAuthorizeInterceptorService } from './jwt-un-authorize-interceptor.service';

describe('JwtUnAuthorizeInterceptorService', () => {
  let service: JwtUnAuthorizeInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JwtUnAuthorizeInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
