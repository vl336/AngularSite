import {Component, Input, OnInit} from '@angular/core';
import {AccountService} from "../shared/account.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    loading: boolean = false;
    hasError: boolean = false;

    @Input() returnUrl: string = "/";

    constructor(private account: AccountService, private router:Router) { }

    ngOnInit(): void {
    }

    login(email: string, password: string) {
        this.loading = true;
        this.account.login(email, password)
            .subscribe(
                () => {
                    this.loading = false;
                    this.router.navigate([this.returnUrl]);
                },
                (error) => {
                    this.loading = false;
                    this.hasError = true;
                });
    }
}
