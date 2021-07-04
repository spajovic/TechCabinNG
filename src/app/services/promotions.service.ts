import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PromotionsService {

  constructor(private _service:HttpClient) { }

  getPromotions():Observable<any>{
    let promotions = this._service.get('/assets/data/promotion.json');
    return promotions;
  }

  
}
