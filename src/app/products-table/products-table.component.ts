import {Component, OnInit} from '@angular/core';
import {Product} from "../models/product";
import {ProductService} from "../shared/product.service";
import {Observable} from "rxjs";
import {MatTableDataSource} from "@angular/material/table";
import {PageEvent} from "@angular/material/paginator";

@Component({
    selector: 'app-products-table',
    templateUrl: './products-table.component.html',
    styleUrls: ['./products-table.component.css']
})
export class ProductsTableComponent implements OnInit {

    displayedColumns: string[] = ['name','price', 'quantity'];
    dataSource: MatTableDataSource<Product> = new MatTableDataSource<Product>();
    currentRow : Product|null = null;

    // paginator
    totalProducts: number = 0;
    pageIndex: number = 0;
    pageSize: number = 5;


    constructor(private product:ProductService) {
        this.loadProducts();
        this.loadTotal();
    }


    ngOnInit(): void {
    }

    onClick(row:Product) {
        this.currentRow = this.currentRow?.id == row.id ? null : row;
    }

    isClicked(row:Product) {
        return this.currentRow?.id == row.id
    }

    getCopy(currentRow: Product|null): Product {
        return currentRow as Product;
    }

    update(changedProduct: Product|null = null) {
        this.loadTotal();
        this.pageIndex = 0;
        this.loadProducts();
        this.currentRow = changedProduct;
    }

    private loadProducts() {
        this.product.getMyProductsByQuota(this.pageSize, this.pageIndex)
            .subscribe((products) => {
                this.dataSource.data = products;
                console.log(products)
            });
    }

    private loadTotal() {
        this.product.getMyTotal()
            .subscribe((res) =>{
                this.totalProducts = res;
            });
    }

    getId(): string {
        if(this.currentRow != null)
            return (this.currentRow as Product).id.toString()
        else
            return "-1";
    }

    paginatorUpdated($event: PageEvent) {
        this.pageIndex = $event.pageIndex
        this.pageSize = $event.pageSize
        this.update()
    }
}
