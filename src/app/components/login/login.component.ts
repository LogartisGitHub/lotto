import { Component, OnDestroy } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnDestroy {
  loginForm?: FormGroup;
  users?: User[] = [];
  message = '';
  pending = false;

  userSubscription : Subscription;
  loginSubscription: Subscription;

  constructor (private authService: AuthService, private router: Router) {
    this.init();
  }

  init() {
    this.authService.logout();
    this.authService.getUsers().subscribe((userDb) => {
      this.users = userDb;
      this.loginForm = new FormGroup({
        TEXTBOX_U: new FormControl(),
        TEXTBOX_P: new FormControl(),
      });
    });
  }

  ngOnDestroy(): void {
    if(this.userSubscription ){
      this.userSubscription.unsubscribe();
    };
    if(this.loginSubscription ){
      this.loginSubscription.unsubscribe();
    };    
  }

  onSelectChange(e: any) {
    const userId = e.target.options.selectedIndex === 0 ? "" : e.target.value;
    this.loginForm?.get('TEXTBOX_U')?.setValue(userId);
    this.loginForm?.get('TEXTBOX_P')?.setValue('');
  }

  login() {
    this.pending = true;
    this.message = '';
    this.authService.login(this.loginForm?.get('TEXTBOX_U')?.value, this.loginForm?.get('TEXTBOX_P')?.value).subscribe((isSuccessful) => {
      if (isSuccessful) {
        this.router.navigateByUrl('game');
      } else {
        this.message = 'Login failure';
      }
      this.pending = false;
    });
  }
}