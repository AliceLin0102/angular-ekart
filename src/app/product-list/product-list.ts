import { Component } from '@angular/core';

@Component({
  selector: 'product-list',
  imports: [],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductListComponent {
    product={
        name: 'iPhone x',
        price: 789,
        color: 'Red',
        discount:8.5,
        instock:0
    }
    getDiscountedPrice(){
        return this.product.price - (this.product.price * this.product.discount/100)
    }}
