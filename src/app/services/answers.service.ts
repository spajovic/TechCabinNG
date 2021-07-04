import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnswersService {

  constructor(private _http:HttpClient) { }

  getAnswers():Observable<any>{
    let answers = this._http.get('/assets/data/helpanswers.json');
    return answers;
  }
}
