import { inject, TestBed, waitForAsync } from '@angular/core/testing';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it(
    'retrieves all the users',
    waitForAsync(
      inject([AuthService], (authservice: AuthService) => {
        authservice.getUsers().subscribe((result) => expect(result.length).toBe(4));
      })
    )
  );

  it(
    'login should be successful',
    waitForAsync(
      inject([AuthService], (authservice: AuthService) => {
        authservice.login('id_1', 'pw1').subscribe((result) => expect(result).toBe(true));
      })
    )
  );

});
