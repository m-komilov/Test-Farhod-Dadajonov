import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
    
  }

  contactMethods = [{type: 1, name: 'E-mail'}, {type: 2, name: 'SMS'}]

  onNameChange(ngModelObj: any) {
    console.log(ngModelObj)
  }

  onSubmit(){
    console.log("Submit uje hesop")
  }

}
