import { Component } from '@angular/core';
import {Search} from './search/search';
import {CommonModule} from '@angular/common';
import { ProductList } from "./product-list/product-list";

@Component({
  selector: 'app-container',
    imports: [Search, CommonModule, ProductList],
  templateUrl: './container.html',
  styleUrl: './container.css',
})
export class ContainerComponent {
    name="John Doe";
    addToCart:number=0;
    product={
        name: 'iPhone x',
        price: 789,
        color: 'Red',
        discount:8.5,
        instock:10,
        pImage:'images/iPhone.png'
    }
    getDiscountedPrice(){
        return this.product.price - (this.product.price * this.product.discount/100)
    }
    onNameChange(event:any){
        this.name = event.target.value;
    }
    decrementCartValue(){
        if(this.addToCart>0){
            this.addToCart--;
        }
    }
    incrementCartValue(){
        if(this.product.instock > this.addToCart){
            this.addToCart++;
        }
    }

    listOfString:string[]=['Mark','Steve','Merry','John','Sarah'];
}
