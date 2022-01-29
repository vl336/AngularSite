import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Product} from "../models/product";
import {Observable} from "rxjs";
import {ProductService} from "../shared/product.service";

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

    @Input() product: Product|null = null
    id: number|null = null

    constructor(private route: ActivatedRoute, private service: ProductService) { }

    ngOnInit(): void {
        this.route.paramMap
            .subscribe((map) => {
                let id: any|null = map.get("id")
                if(id == null) console.log("Something is wrong, id is wrong")
                else {
                    this.id = id as number
                    this.loadProduct(this.id)
                }
            });
    }

    onClick() {
        // console.log(`add new product ${this.product.id}`)
    }

    private loadProduct (id:number) {
        this.service.getProduct(id)
            .subscribe((product) => {
                this.product = product
            });
    }

    decorateNumber(num: number|undefined):string {
        if(num == null) return "";
        let str = num.toString()
        if(str.includes("."))
            return str;
        else
            return str + '.00'
    }
}
