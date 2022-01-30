import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {environment} from "../../environments/environment.prod";
import {Jwt} from "../models/jwt";
import {CookieService} from "ngx-cookie-service";
import {Observable} from "rxjs";
import {Router} from "@angular/router";
import {User} from "../models/user";
import {map} from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})
export class AccountService {

    accessToken: string|undefined;
    username: string|undefined;
    logged:boolean = false;

    user: User|undefined;

    constructor(private http: HttpClient,
                private cookie: CookieService,
                private router: Router) { }

    public login(email:string, password:string): Observable<Jwt> {
        return this.http.post<Jwt>(
            `${environment.backend}/account/login?email=${email}&password=${password}`,
            null)
            .pipe(map((token) => {
                this.saveToCookie(token)
                this.accessToken = token.access_token
                this.username = token.username
                this.logged = true;
                console.log(token)
                return token;
            }));
    }
    public register(email:string, password:string): Observable<User>
    {
        return this.http.post<User>(
            `${environment.backend}/account/register?email=${email}&password=${password}`,
            null)
            .pipe(map((user: User) => {
                this.user = user
                return user;
            }));
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
            //todo: check if acc exists
        }
    }
    private saveToCookie(jwt: Jwt) {
        this.cookie.set("token", jwt.access_token)
        this.cookie.set("username", jwt.username)
    }
}
