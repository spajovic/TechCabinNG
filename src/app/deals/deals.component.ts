import { trigger, state, style, animate, transition } from '@angular/animations';
import { ProductsService } from './../services/products.service';
import { Products } from './../interface/products';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-deals',
  templateUrl: './deals.component.html',
  styleUrls: ['./deals.component.scss'],
  // animations:[
  //   trigger("nesto",[
  //     state('0',style({transform:'scale(1.0)'})),
  //     state('1',style({transform:'scale(1.3)'})),
  //     transition("0 => 1",animate('800ms ease')),
  //     transition("1 => 0",animate('100ms ease'))
  //   ])
  // ]
  // Profesorka, ne znam kako da odradim da animacija utice samo na jedan element proizvoda. Verujem da ima veze sa dovlacenjem reference bas tog elementa, 
  //ali zaista ne znam da implementiram, a gledao sam svuda onlie
})
export class DealsComponent implements OnInit {
  @ViewChild('f') input:any;
  //animation trigger
  trigger:number = 0;

  private btnValue = "Add to cart";
  products:Products[] = [];

  
  public get BtnValue() : string {
    return this.btnValue;
  }
  

  constructor(private _prod:ProductsService) { }

  ngOnInit(): void {
    this._prod.getProducts().subscribe(
      (Response:Products[]) =>{
        this.products = Response.filter((x)=>{
          if(x.bestseller == false && x.newprice)
            return x;
          else
            return;
        });
        console.log(this.products);
      },
      (Error) =>{
        alert("There was a mistake on our part, please try again later");
      }
    )
  }

  AddCart(product:Products){
    alert("Product: "+product.name+" is in your cart");
  }

  print(img: any){
    this.trigger = 1;
  }
  print1(img: any){
    this.trigger = 0;
  }


}
