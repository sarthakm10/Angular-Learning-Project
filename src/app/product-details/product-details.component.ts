import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from '../catalog/product.modal';

@Component({
  selector: 'robot-shop-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  @Input() product: any;
  // @Input is used to receive data from the parent component
  // product is the input property that will hold the product data

  @Output() buy = new EventEmitter<IProduct>();
  // @Output is used to emit events to the parent component
  // buy is the output property that will emit the product data when the buy event is triggered

  getImageUrl(product: IProduct) {
    if (!product) return '';
    return '/assets/images/robot-parts/' + product.imageName;
  }

  buyButtonClicked(product: IProduct) {
    this.buy.emit();
  }

  getDiscountedClass(product: IProduct){
    return product.discount > 0 ? ['strikethrough'] : [];
  }
}
