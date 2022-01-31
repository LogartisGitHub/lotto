import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm?: FormGroup;
  users?: User[] = [];
  message = '';
  pending = false;

  constructor(private authService: AuthService, private router: Router) {
    this.init();
  }

  init() {
    this.authService.isLoggedIn = false;
    this.authService.getUsers().subscribe((userDb) => {
      this.users = userDb;
      this.loginForm = new FormGroup({
        TEXTBOX_U: new FormControl(),
        TEXTBOX_P: new FormControl(),
      });
    });
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