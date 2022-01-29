import { Component, OnInit } from '@angular/core';
import {Product} from "../models/product";

@Component({
    selector: 'app-new-product',
    templateUrl: './new-product.component.html',
    styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {
    marketplaceType: any;
    added: any;

    constructor() { }

    add(product: Product){
        console.log(product);
        this.added = true;
    }

    ngOnInit(): void {
    }

}
