import { Injectable } from '@angular/core';

export type Product = {
    Name:string,
    Quantity: number,
    Price: number,
    Manufacturer: string
}

@Injectable({
  providedIn: 'root'
})
export class MarketplaceService {

    getProducts():Product[] {
       return [
           {
               Name: "Bread",
               Price: 3.56,
               Quantity: 100,
               Manufacturer: "SMAK"
           },
           {
               Name: "Cheese",
               Price: 13.85,
               Quantity: 50,
               Manufacturer: "SMAK"
           }
       ];
    }

    constructor() { }
}
