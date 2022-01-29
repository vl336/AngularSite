import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import {Observable} from "rxjs";
import {MatRadioGroup} from "@angular/material/radio";
import {ProductService} from "../shared/product.service";


@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.css']
})
export class MarketplaceComponent implements OnInit {
    dataSource:any
    displayedColumns: string[] = ['position', 'name', 'price', 'quantity', 'description'];

    marketplaceType:any

    added: boolean = false;

    constructor(private service: ProductService) {
        service.getProducts().subscribe((prods) => {
            this.dataSource=prods
            console.log(this.dataSource)
        });
    }

    addProduct(name:string,
               price:number,
               quantity:number,
               manufacturer:string):void {
        console.log(this.marketplaceType)
        this.added = true;
    }

    ngOnInit(): void {
    }

    log(x:any) {
        console.log(x)
    }
}
