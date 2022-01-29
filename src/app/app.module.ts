import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// MATERIAL IMPORTS
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';

// CUSTOM COMPONENTS
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { MarketplaceComponent } from './marketplace/marketplace.component';
import { NewProductComponent } from './new-product/new-product.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundComponent } from './not-found/not-found.component';

// CUSTOM SERVICES
import {ProductService} from "./shared/product.service";

const routes = [
    { path: "", component: HomeComponent },
    { path: "create", component: NewProductComponent },
    { path: "products", component: MarketplaceComponent },
    { path: "product/:id", component: ProductComponent },
    { path: "**", component: NotFoundComponent },
]

@NgModule({
    declarations: [
        AppComponent,
        ProductComponent,
        MarketplaceComponent,
        NewProductComponent,
        NavbarComponent,
        NotFoundComponent,
        HomeComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        NgbModule,
        FormsModule,
        HttpClientModule,
        RouterModule.forRoot(routes),

        // Material modules
        MatCheckboxModule,
        MatButtonModule,
        MatRadioModule,
        MatTableModule,
        MatCardModule,
        MatListModule
    ],
    providers: [ProductService],
    bootstrap: [AppComponent]
})
export class AppModule { }
