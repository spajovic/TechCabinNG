import { Products } from './../../interface/products';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-best-seller',
  templateUrl: './best-seller.component.html',
  styleUrls: ['./best-seller.component.scss']
})
export class BestSellerComponent implements OnInit {
  @Input('product') product!: Products;
  private buttonValue:string = "Add to cart";
  
  
  public get ButtonValue() : string {
    return this.buttonValue;
  }
  

  constructor() {
   }

  ngOnInit(): void {
  }

  AddToCart(product:Products){
    alert("Product: "+ product.name +" is in your cart");
  }

}
