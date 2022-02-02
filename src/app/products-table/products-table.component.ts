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

    constructor(private product:ProductService) {
        this.loadProducts();
    }


    ngOnInit(): void {
    }

    onClick(row:Product) {
        this.currentRow = this.currentRow == row ? null : row;
    }

    isClicked(row:Product) {
        return this.currentRow?.id == row.id
    }

    getCopy(currentRow: Product|null): Product {
        // console.log("copy called")
        // let copy: Product = {}as Product;
        // Object.assign(copy, currentRow as Product);
        return currentRow as Product;
    }

    update(changedProduct: Product|null = null) {
        this.currentRow = null;
        this.loadProducts();
    }

    private loadProducts() {
        this.product.getMyProducts()
            .subscribe((products) => {
                this.dataSource.data = products;
                console.log(products)
            });
    }

    getId(): string {
        if(this.currentRow != null)
            return (this.currentRow as Product).id.toString()
        else
            return "-1";
    }
}
