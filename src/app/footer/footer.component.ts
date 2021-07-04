import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  
  private author:string = "Stefan Vasković";
  private date:Date = new Date();
  private weekWork = "8am to 8pm";
  private wkndWork = "9am to 7pm";

  
  public get Author() : string {
    return this.author
  }

  public get Date() : Date {
    return this.date;
  }
  
  public get WeekWork() : string {
    return this.weekWork;
  }
  
  public get WkndWork() : string {
    return this.wkndWork;
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
