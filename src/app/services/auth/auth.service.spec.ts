/**
 * Created By : Laxman Kanhere (http://laxmank.in)
 */

import { TestBed, inject } from '@angular/core/testing';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthService]
    });
  });

  it('should be created', inject([AuthService], (service: AuthService) => {
    expect(service).toBeTruthy();
  }));
});


/**
 * Created By : Laxman Kanhere (http://laxmank.in)
 */