import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class JwtInterceptorService implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        if (sessionStorage['CurrentUser'] != undefined) {
            let token: string = JSON.parse(sessionStorage['CurrentUser']).token;
            let bearer: string = `Bearer ${token}`
            req = req.clone({
                setHeaders: {
                    Authorization: bearer
                }
            })
        }

        return next.handle(req);
    }
}
