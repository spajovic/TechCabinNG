import { AnswersService } from './../services/answers.service';
import { Answers } from './../interface/answers';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss']
})
export class HelpComponent implements OnInit {

  answers:Answers[] = [];
  constructor(private _answ:AnswersService) { }

  ngOnInit(): void {
    this._answ.getAnswers().subscribe(
      (Response:Answers[]) =>{
        this.answers = Response;
      },
      (Error) => {
        alert("There was a mistake on our part, please try again later");
      }
    )
  }

}
