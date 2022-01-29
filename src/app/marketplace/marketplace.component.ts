import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Product } from 'src/app/models/product';
import {Observable} from "rxjs";
import {MatRadioGroup} from "@angular/material/radio";
import {ProductService} from "../shared/product.service";
import {NgModel} from "@angular/forms";


@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.css']
})
export class MarketplaceComponent implements OnInit {
    dataSource:any
    pageSize: number = 15;
    pageIndex: number = 0;
    pageLength: number = 100;

    added: boolean = false;
    paginator: NgModel|any;

    constructor(private service: ProductService) {
        service.getProducts().subscribe((prods) => {
            this.dataSource=prods
            console.log(this.dataSource)
        });
    }

    ngOnInit(): void {
    }

    onPaginatorChange($event: PageEvent) {
        console.log($event)
        this.pageIndex = $event.pageIndex;
    }
}
