import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { MarketplaceComponent } from './marketplace/marketplace.component';
import {MarketplaceService} from "./marketplace/marketplace.service";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from "@angular/forms";

@NgModule({
    declarations: [
        AppComponent,
        ProductComponent,
        MarketplaceComponent
    ],
    imports: [
        BrowserModule,
        NgbModule,
        FormsModule
    ],
    providers: [MarketplaceService],
    bootstrap: [AppComponent]
})
export class AppModule { }
