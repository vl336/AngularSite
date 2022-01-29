import { Component, OnInit } from '@angular/core';
import {AccountService} from "../shared/account.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

    constructor(public account: AccountService) { }

    ngOnInit(): void {
    }
}
