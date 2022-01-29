import { Component } from '@angular/core';
import {AccountService} from "./shared/account.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'untitledApp';

    constructor(private account:AccountService) {
        account.loadFromCookie();
    }
}
