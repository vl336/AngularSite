import { Component, OnInit } from '@angular/core';
import {MarketplaceService} from "./marketplace.service";
import type {Product} from "./marketplace.service"

@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.css']
})
export class MarketplaceComponent implements OnInit {

    title = "Marketplace.v1";
    products: Product[];
    added: boolean = false;

    constructor(service: MarketplaceService) {
        this.products = service.getProducts();
    }

    addProduct(name:string,
               price:number,
               quantity:number,
               manufacturer:string):void {
        console.log(`add new product with params: ${name}; ${price}; ${quantity}; ${manufacturer}`)
        this.added = true;
    }

    ngOnInit(): void {
    }

    log(x:any) {
        console.log(x)
    }
}
