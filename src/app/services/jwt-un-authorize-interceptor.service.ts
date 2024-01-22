import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable()
export class JwtUnAuthorizeInterceptorService implements HttpInterceptor {

  constructor() { }

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
                alert('unAuthorized access to data');
              }
              else {
                console.log(err.error);
              }
            }
          }
        }));
  }
}
