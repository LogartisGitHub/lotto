import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  userDb: User[] = [
    { userId: 'id_1', userName: 'Nagy Pista', password: 'pw1' },
    { userId: 'id_2', userName: 'Kis Pista', password: 'pw2' },
    { userId: 'id_3', userName: 'Erős Pista', password: 'pw3' },
    { userId: 'id_4', userName: 'Gyenge Pista', password: 'pw4' },
  ];

  isLoggedIn = false;
  redirectUrl?: string;

  getUsers(): Observable<User[]> {
    // Dummy network latency
    return of(this.userDb).pipe(
      delay(1000),
      map((userDb) => {
        const userDBwithoutPassword = userDb.slice().map((user) => {
          return (({ userId, userName }) => ({ userId, userName }))(user);
        });
        return userDBwithoutPassword;
      })
    );
  }

  login(userId: string, password: string): Observable<boolean> {
    // Dummy network latency
    return of(false).pipe(
      delay(1000),
      map(() => {
        const foundUser = this.userDb.find((user) => {
          return user.userId === userId && user.password === password;
        });
        this.isLoggedIn = foundUser ? true : false;
        return this.isLoggedIn;
      })
    );
  }
}
