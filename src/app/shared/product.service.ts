import { Injectable } from '@angular/core';
import {Product} from "../models/product";
import {environment} from "../../environments/environment.prod";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ProductService {

    constructor(private http: HttpClient) { }

    getProducts() : Observable<Product[]> {
        return this.http.get<Product[]>(environment.backend+"/products");
    }

    getProduct(id:number) : Observable<Product> {
        return this.http.get<Product>(environment.backend+"/products/"+id);
    }
}
