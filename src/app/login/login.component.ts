import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { LoginModel } from '../models/login-model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginModel: LoginModel = new LoginModel();
  loginError: string = '';

  constructor(private loginService: LoginService,
    private router: Router) {
    }

  ngOnInit(): void {
  }

  onLoginClick(event: any) {

    let user = this.loginService.login(this.loginModel).subscribe({
      next: (result) => {
        this.router.navigateByUrl('/dashboard')
      },
      error: (err) => {
        this.loginError = err.error;
      }
    });
  }

}
