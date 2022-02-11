import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {Product} from "../models/product";
import {ProductService} from "../shared/product.service";
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {ConfirmationDialogComponent} from "../confirmation-dialog/confirmation-dialog.component";

@Component({
    selector: 'app-input-product',
    templateUrl: './input-product.component.html',
    styleUrls: ['./input-product.component.css']
})
export class InputProductComponent implements OnInit, OnChanges {

    loaded: boolean = true;

    @Input() idString: string = "-1"
    id: number = -1;

    @Input() change: boolean = false;
    @Output() submitted: EventEmitter<Product> = new EventEmitter<Product>();

    product: Product = {} as Product

    constructor(public dialog: MatDialog,
                private service: ProductService, private router: Router) { }

    submit() {
        if(this.change) {
            console.log(this.product)
            this.service.changeProduct(this.product.id, this.product)
                .subscribe((prod) => {
                    this.product = prod;
                    this.submitted.emit(prod);
                }, error => {
                    console.log(error)
                });
        }
        else {
            this.service.addProduct(this.product)
                .subscribe((prod) => {
                    this.product = prod;
                    this.submitted.emit(prod);
                }, (error) =>{
                    console.log(error)
                });
        }
    }

    askForDelete() {
        const dialogRef = this.dialog.open(ConfirmationDialogComponent);
        dialogRef.afterClosed()
            .subscribe((res) =>
            {
                if(res == "confirm")
                    this.delete()
            });
    }

    delete() {
        this.service.deleteProduct(this.id)
            .subscribe(() =>
            {
                this.submitted.emit();
            });
    }

    ngOnInit(): void {
        this.id = +this.idString;
        if(this.id != -1) {
            this.loaded = false;
            this.service.getProduct(this.id)
                .subscribe((prod) => {
                    this.product = prod;
                    console.log(prod)
                    this.loaded = true;
                });
        }
    }

    ngOnChanges() {
        this.ngOnInit();
    }
}
