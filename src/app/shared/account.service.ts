import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {environment} from "../../environments/environment.prod";
import {Jwt} from "../models/jwt";
import {CookieService} from "ngx-cookie-service";
import {Observable} from "rxjs";
import {Router} from "@angular/router";

@Injectable({
    providedIn: 'root'
})
export class AccountService {

    accessToken: string|undefined;
    username: string|undefined;
    logged:boolean = false;

    constructor(private http: HttpClient,
                private cookie: CookieService,
                private router: Router) { }

    public login(email:string, password:string): Observable<Jwt>
    {
        let request =  this.http.post<Jwt>(
            `${environment.backend}/account/login?email=${email}&password=${password}`,
            null);
        request.subscribe((token) => {
            this.saveToCookie(token)
            console.log(token)
            this.accessToken = token.access_token
            this.username = token.username
            this.logged = true;
        });
        return request;
    }
    public quitAccount() {
        this.cookie.delete("token");
        this.cookie.delete("username");
        this.accessToken = undefined
        this.username = undefined
        this.logged = false;
        this.router.navigate(["/"])
    }

    public loadFromCookie() {
        if(this.cookie.check("token") && this.cookie.check("username")) {
            this.accessToken = this.cookie.get("token")
            this.username = this.cookie.get("username")
            this.logged = true;
        }
    }
    private saveToCookie(jwt: Jwt) {
        this.cookie.set("token", jwt.access_token)
        this.cookie.set("username", jwt.username)
    }
}
