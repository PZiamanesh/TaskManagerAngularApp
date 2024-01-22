import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginModel } from '../models/login-model';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  currentUserName: string = '';

  constructor(private httpClient: HttpClient) { }

  login(loginModel: LoginModel) : Observable<any> {

    return this.httpClient.post('https://localhost:5001/api/account/login', loginModel)
      .pipe(map((user: any)=>{
        
        if (user !== null) {
          let token:string = user.securityToken;
          let someObject = {token: token}
          sessionStorage['CurrentUser'] = JSON.stringify(someObject);
          this.currentUserName = user.userName;
          return user;
        }
      }));
  }

  Logout(){

    this.currentUserName = '';
    sessionStorage.removeItem('CurrentUser');
  }



}
