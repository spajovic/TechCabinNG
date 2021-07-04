import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetnavitemsService {

  constructor(private _nav:HttpClient) { }

  getNavItems():Observable<any>{
    let navigation = this._nav.get('/assets/data/navigation.json');
    return navigation;
  }
}
