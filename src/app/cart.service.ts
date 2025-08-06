import { Injectable } from '@angular/core';
import { IProduct } from './catalog/product.modal';

@Injectable({
  providedIn: 'root'
  // providedIn allows the service to be available application-wide
})
export class CartService {
  
  cart: IProduct[] = [];

  add(product: IProduct) {
    this.cart.push(product);
      console.log(`product ${product.name} added to cart`);
  }

  constructor() { }
}
