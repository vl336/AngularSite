import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
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
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatDialogModule} from '@angular/material/dialog';

// CUSTOM COMPONENTS
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { MarketplaceComponent } from './marketplace/marketplace.component';
import { InputProductComponent } from './input-product/input-product.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FooterComponent } from './footer/footer.component';

// CUSTOM SERVICES
import { ProductService } from "./shared/product.service";
import { AccountService } from "./shared/account.service";
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProductsTableComponent } from './products-table/products-table.component';
import {AuthInterceptor} from "./shared/auth.interceptor";
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';

const routes = [
    { path: "home",            component: HomeComponent,          data: { title: "Home" }        },
    { path: "login",           component: LoginComponent,         data: { title: "Login" }       },
    { path: "register",        component: RegisterComponent,      data: { title: "Register" }    },
    { path: "create",          component: InputProductComponent,    data: { title: "Create" }      },
    { path: "products",        component: MarketplaceComponent,   data: { title: "Marketplace" } },
    { path: "product/:id",     component: ProductComponent,       data: { title: "Product" }     },
    { path: "products/studio", component: ProductsTableComponent, data: { title: "Studio" }      },
    { path: "**",              component: NotFoundComponent,      data: { title: "404" }         },
]

@NgModule({
    declarations: [
        AppComponent,
        ProductComponent,
        MarketplaceComponent,
        InputProductComponent,
        NavbarComponent,
        NotFoundComponent,
        HomeComponent,
        FooterComponent,
        LoginComponent,
        RegisterComponent,
        ProductsTableComponent,
        ConfirmationDialogComponent,
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
        MatPaginatorModule,
        MatProgressSpinnerModule,
        MatDialogModule
    ],
    providers: [
        // SERVICES
        ProductService,
        AccountService,
        CookieService,

        // INTERCEPTORS
        {
            provide : HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi   : true,
        },
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
