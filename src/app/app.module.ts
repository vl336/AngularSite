import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CookieService } from "ngx-cookie-service";

// MATERIAL IMPORTS
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatPaginatorModule} from '@angular/material/paginator';

// CUSTOM COMPONENTS
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { MarketplaceComponent } from './marketplace/marketplace.component';
import { NewProductComponent } from './new-product/new-product.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FooterComponent } from './footer/footer.component';

// CUSTOM SERVICES
import { ProductService } from "./shared/product.service";
import { AccountService } from "./shared/account.service";
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes = [
    { path: "", component: HomeComponent },
    { path: "login", component: LoginComponent },
    { path: "register", component: RegisterComponent },
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
        HomeComponent,
        FooterComponent,
        LoginComponent,
        RegisterComponent
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
        MatListModule,
        MatPaginatorModule
    ],
    providers: [
        ProductService,
        AccountService,
        CookieService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
