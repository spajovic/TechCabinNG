import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductsService } from './../services/products.service';
import { Products } from './../interface/products';
import { PromotionsService } from './../services/promotions.service';
import { Component, OnInit } from '@angular/core';
import { Promotion } from '../interface/promotion';
import { trigger,state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations:[
    trigger("start",[
      state("0",style({color:'white',backgroundColor: '#751fff'})),
      state("1",style({color: 'white',backgroundColor: 'black'})),
      transition("1 <=> 0", animate('500ms ease'))
    ]),
    trigger("btnDiv",[
      state("0",style({color:'white',backgroundColor: 'black'})),
      state("1",style({color:'black',backgroundColor: 'white'})),
      transition("1 <=> 0", animate('500ms ease'))
    ]),
    trigger("valid",[
      state("true",style({border:'none'})),
      state("false",style({border:'1px solid red'})),
      transition("true => false",animate('1100ms ease-out')),
      transition("false => true",animate('1000ms ease-in'))
    ])

  ]
})
export class HomeComponent implements OnInit {
  //Animation okidaci
  start:number = 0;
  btnDiv:number = 0;



  // Headline
  private headline:string = "Incredible prices on your favourite Items";
  private headParagraph:string = "Ovde neki manji tekst";
  private headButton = "Shop now";

  // Newsletter
  private newsLetterHeading:string = "Newsletter";
  private newsLetterTxt:string = "Sign up to receive updates on new arrivals and special offers";
  private plaseholder:string = "Email..."
  forma!:FormGroup;

  // Json array-s
  promotions:Promotion[] = [];
  products:Products[] = [];
  
  
  // Get metode
  public get Headline() : string {
    return this.headline;
  }
  public get HeadParagraph() : string {
    return this.headParagraph;
  }
  
  public get HeadButton() : string {
    return this.headButton;
  }
  
  public get NewsLetterHeading() : string {
    return this.newsLetterHeading;
  }
  
  public get NewsLetterTxt() : string {
    return this.newsLetterTxt;
  }
  
  public get Plaseholder() : string {
    return this.plaseholder;
  }
  

  constructor(private _prom:PromotionsService, private _prod:ProductsService) { }

  ngOnInit(): void {
    this._prom.getPromotions().subscribe(
      (Response:Promotion[]) =>{
        this.promotions = Response;
      },
      (Error) =>{
        alert("There was a mistake on our part, please  try again later");
      }
    );

    this._prod.getProducts().subscribe(
      (Response:Products[]) => {
        this.products = Response.filter((x) => {
          if(x.bestseller == true){
            return x;
          }
          return;
        })
      },
      (Error) => {
        alert("There was a mistake on our part, please try again later");
      }
    );

    this.forma = new FormGroup({
      mail: new FormControl("",[Validators.required,Validators.email])
    })
  }

  presaoPreko(){
    this.start = 1;
  }
  izasao(){
    this.start = 0;
  }

  presaoPreko1(){
    this.btnDiv = 1;
  }
  izasao1(){
    this.btnDiv = 0;
  }

  onSubmit(){
    if(this.forma.valid){
      alert('Message sent')
      this.forma.reset();
    }
    else
      return;
  }
}
