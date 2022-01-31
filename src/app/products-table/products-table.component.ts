import { Component, OnInit } from '@angular/core';
import {Product} from "../models/product";
import {ProductService} from "../shared/product.service";
import {Observable} from "rxjs";
import {MatTableDataSource} from "@angular/material/table";

@Component({
    selector: 'app-products-table',
    templateUrl: './products-table.component.html',
    styleUrls: ['./products-table.component.css']
})
export class ProductsTableComponent implements OnInit {

    displayedColumns: string[] = ['name','price', 'quantity'];
    dataSource: MatTableDataSource<Product> = new MatTableDataSource<Product>();
    currentRow : Product|null = null;
    update: boolean = false;

    constructor(private product:ProductService) {
        product.getMyProducts()
            .subscribe((products) => {
                this.dataSource.data = products;
                console.log(products)
            });
    }

    ngOnInit(): void {
    }

    onClick(row:Product) {
        this.currentRow = this.currentRow == row ? null : row;
    }

    isClicked(row:Product) {
        return this.currentRow == row
    }

    getCopy(currentRow: Product|null): Product {
        let copy: Product = {}as Product;
        Object.assign(copy, currentRow as Product);
        return copy;
    }
}
