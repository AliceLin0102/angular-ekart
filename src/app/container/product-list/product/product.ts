import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  imports: [FormsModule, CommonModule],
  templateUrl: './product.html',
  styleUrl: './product.css',
  standalone:true
})
export class ProductComponent {
    @Input()
    product: { 
        id: number,
        name: string, 
        description: string, 
        brand: string, 
        gender: string, 
        category: string,
        size: number[],
        color:string[],
        price:number,
        discountPrice?:number,
        is_in_inventory:boolean,
        items_left:number,
        imageURL:string,
        slug:string
    };
}
