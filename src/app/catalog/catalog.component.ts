import { Component, inject } from '@angular/core';
import { IProduct } from './product.modal';
import { CartService } from '../cart.service';
import { ProductService } from './product.service';

@Component({
  selector: 'robot-shop-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent {
    products: any;
    filter: string = '';
    private cartService: CartService = inject(CartService);
    // The CartService is injected to allow adding products to the cart
    // The inject function is used to get an instance of CartService
    // This allows the component to access the methods of CartService

    private productSvc: ProductService = inject(ProductService);

    constructor() {
    }

    // Lifecycle hook that is called after data-bound properties are initialized
    // here its used to fetch the products from the ProductService
    ngOnInit() {
      this.productSvc.getProducts().subscribe(products => {
        // Assign the fetched products to the component's products property
        this.products = products;
      });
    }

    addToCart(product: IProduct) {
      this.cartService.add(product);
      // This method calls the add method from CartService to add the product to the cart
    }

    getFilteredProducts() {
    return this.filter === ''
      ? this.products
      : this.products.filter((product: any) => product.category === this.filter);
  }

}
