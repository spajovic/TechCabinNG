import { GetnavitemsService } from './../../services/getnavitems.service';
import { Component, OnInit } from '@angular/core';
import {Nav} from '../../interface/navigation'

@Component({
  selector: 'app-head-navigation',
  templateUrl: './head-navigation.component.html',
  styleUrls: ['./head-navigation.component.scss']
})
export class HeadNavigationComponent implements OnInit {


  constructor(private nav:GetnavitemsService) { }
  public navigation:Nav[] = [];
  private heading:string = "TechCabin";
  private sales:string[] = ["Get 15% of your first purchase","Get 20% of your first purchase","Get your Black Friday items here"];
  randomIndex = Math.floor(Math.random() * this.sales.length);
  
  public get Heading() : string {
    return this.heading;
  }

  
  public get Sales() : string[] {
    return this.sales
  }
  
  

  ngOnInit(): void {
    this.nav.getNavItems().subscribe(
      (Response:Nav[]) =>{
        this.navigation = Response;
        console.log(this.navigation);
      },
      Error =>{
        alert("There was a mistake on our part, please try again later");
        return;
      } 
    );
  }

  getRandomSale(){
    return this.Sales[this.randomIndex];
  }



}
