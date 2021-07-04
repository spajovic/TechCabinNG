import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations:[
    trigger("valid",[
      state("true",style({border:'none'})),
      state("false",style({border:'1px solid red'})),
      transition("true => false",animate('1100ms ease-out')),
      transition("false => true",animate('1000ms ease-in'))
    ])
  ]
})
export class ContactComponent implements OnInit {

  form!:FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl("",[Validators.required, Validators.pattern(/^[a-zA-Z/šđčćžŠĐČŽĆ]{2,30}(([a-zA-Z/šđčćžŠĐČŽĆ ])?[a-zAZ/šđčćžŠĐČŽĆ]*)*$/)]),
      email: new FormControl("",[Validators.required,Validators.email]),
      surname: new FormControl("",[Validators.required,Validators.pattern(/^[a-zA-Z/šđčćžŠĐČŽĆ]{2,30}(([a-zA-Z/šđčćžŠĐČŽĆ ])?[a-zAZ/šđčćžŠĐČŽĆ]*)*$/)]),
      subject: new FormControl("",[Validators.required, Validators.minLength(2),Validators.maxLength(30)]),
      message: new FormControl("",[Validators.required,Validators.minLength(2),Validators.maxLength(500)]),
      terms: new FormControl("",[Validators.requiredTrue])
    });
  }
  onSubmit(){
      alert("Message sent");
      this.form.reset();
  }
  colorTermsLabel(){
    if(this.form.get('terms')?.valid){
      return 'black'
    }
    else{
      return 'red'
    }
  }

}
