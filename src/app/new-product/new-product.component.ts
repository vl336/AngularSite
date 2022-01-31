import {Component, Input, OnInit, Output} from '@angular/core';
import {Product} from "../models/product";
import {ProductService} from "../shared/product.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-new-product',
    templateUrl: './new-product.component.html',
    styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {

    @Input() product: Product = {} as Product;
    @Input() change: boolean = false;

    @Output() added: boolean = false;

    constructor(private service: ProductService, private router: Router) { }

    submit() {
        if(this.change) {
            //todo:
            console.log("not implemented")
        }
        else {
            this.service.addProduct(this.product)
                .subscribe((prod) => {
                    this.product = prod;
                    this.added = true;
                });
        }
    }

    ngOnInit(): void {
    }

}
