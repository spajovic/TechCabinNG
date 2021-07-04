import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.scss']
})
export class NotfoundComponent implements OnInit {
  private heading:string = "Page not found";

  
  public get Heading() : string {
    return this.heading;
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
