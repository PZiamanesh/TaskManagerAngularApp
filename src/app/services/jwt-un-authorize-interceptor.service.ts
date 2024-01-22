import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { LoginService } from './login.service';

@Injectable()
export class JwtUnAuthorizeInterceptorService implements HttpInterceptor {

  constructor(private router: Router, private loginService: LoginService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      tap(
        {
          next: (result: HttpEvent<any>) => {
            // log response
          },
          error: (err: any) => {
            if (err instanceof HttpErrorResponse) {
              if (err.status == 401) {
                this.router.navigateByUrl('/login');
                console.log('unauthorized')
              }
              else {
                console.log(err.error);
              }
            }
          }
        }));
  }
}
