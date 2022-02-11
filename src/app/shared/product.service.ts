import { Injectable } from '@angular/core';
import {Product} from "../models/product";
import {environment} from "../../environments/environment.prod";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {AccountService} from "./account.service";

@Injectable({
    providedIn: 'root'
})
export class ProductService {

    constructor(private http: HttpClient) { }

    getProducts() : Observable<Product[]> {
        return this.http.get<Product[]>(environment.backend+"/products");
    }

    getProduct(id:number) : Observable<Product> {
        return this.http.get<Product>(environment.backend+"/products/" + id);
    }

    getMyProducts() : Observable<Product[]> {
        return this.http.get<Product[]>(environment.backend+"/products/my");
    }

    getMyProductsByQuota(quota: number, step: number) : Observable<Product[]> {
        return this.http.get<Product[]>(environment.backend+"/products/my?quota=" + quota + "&step=" + step);
    }

    getMyTotal() : Observable<number> {
        return this.http.get<number>(environment.backend + "/products/my/total")
    }

    addProduct(product: Product): Observable<Product> {
        return this.http.post<Product>(environment.backend+"/products/create", product)
    }

    deleteProduct(id: number) {
        return this.http.delete(environment.backend+"/products/delete/" + id)
    }

    changeProduct(id: number, product: Product) : Observable<Product> {
        return this.http.put<Product>(environment.backend+"/products/change/" + id, product)
    }
}
