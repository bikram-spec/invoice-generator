import { Component, OnInit } from '@angular/core';
import {FormBuilder,Validators} from '@angular/forms'


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signup = this.fb.group({
    institue_name: [null,Validators.required],
    email: [null, Validators.compose([Validators.required,Validators.email])],
    password: [null, Validators.compose([Validators.required,Validators.minLength(8)])],
    confirm_password: [null, Validators.compose([
      Validators.required, Validators.minLength(8)])
    ]
  });
  hide=true;
  submited=false;
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.submited = true;
    if (this.signup.value.password !== this.signup.value.confirm_password) {
      this.signup.controls.confirm_password.setErrors({ mustMatch: true });
  } else {
    this.signup.controls.confirm_password.setErrors(null);
  }
        // stop here if form is invalid
        if (this.signup.invalid) {
            return;
        }
        else{
          alert("all the crediancels are right")
          console.log(this.signup.value.institue_name,this.signup.value.email,this.signup.value.password);
        }

    
  }

}
