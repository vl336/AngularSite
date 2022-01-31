import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {AccountService} from "./account.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private account:AccountService) {}

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        if(this.account.accessToken != undefined) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${this.account.accessToken}`
                }
            });
        }
        return next.handle(request);
    }
}
