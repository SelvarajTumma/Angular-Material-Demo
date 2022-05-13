import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  LoginForm:FormGroup
  constructor(private formbuilder:FormBuilder) {
    this.LoginForm=this.formbuilder.group({
      username:["",Validators.required],
      password:["",Validators.required,Validators.minLength(8)]
    })
   }

  ngOnInit() {
  }

}
