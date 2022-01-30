import {Component, Input, OnInit} from '@angular/core';
import {User} from "../models/user";
import {AccountService} from "../shared/account.service";
import {Router} from "@angular/router";
import {first} from "rxjs/operators";

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    loading: boolean = false;
    hasError: boolean = false;

    @Input() returnUrl: string = "/";

    constructor(private account: AccountService, private router: Router) { }

    ngOnInit(): void {
    }

    register(email:string, password: string) {
        this.hasError = false;

        this.loading = true;
        this.account.register(email, password)
            .pipe(first())
            .subscribe(
                (user) => {
                    this.account.login(email, password)
                        .subscribe(() =>
                        {
                            this.loading = false;
                            this.router.navigate([this.returnUrl]);
                        });
                },
                (error) => {
                    this.loading = false;
                    this.hasError = true;
                    console.log(error)
                    console.log(this.account.user)
                }
            );
    }

}
