import { Component, OnInit } from '@angular/core';
import {User} from "../models/user";

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    loading: boolean = false;
    hasError: boolean = false;

    constructor() { }

    ngOnInit(): void {
    }

    register(email:string, password: string) {
//todo
    }

}
