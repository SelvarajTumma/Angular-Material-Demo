import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  Registrationform:FormGroup
  constructor(private formbuilder:FormBuilder) {
    this.Registrationform=formbuilder.group({
      Name:["",Validators.required],
      Email:["",Validators.email],
      pwd:["",[Validators.minLength(8),Validators.required]]
    })
   }
  
  ngOnInit() {
  }
  submit(){
    console.log(this.Registrationform.value)
  }

}
