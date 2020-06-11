import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private loginService: LoginService, private _router: Router) {}
  username: string = '';
  password: string = '';
  error: string;
  ngOnInit(): void {}

  login(): void {
    this.loginService
      .authenticate(this.username, this.password)
      .then((data) => {
        if (data) {
          this._router.navigate(['dashboard']);
        } else {
          this.error = 'Username or password is incorrect.';
        }
      });
  }
}
