import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginModel } from '../models/login-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }

  login(loginModel: LoginModel) : Observable<any> {
    return this.httpClient.post('https://localhost:5001/api/account/login', loginModel);
  }
}
