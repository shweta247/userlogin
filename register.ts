import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Password } from 'primeng/password';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule,RouterLink],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {
  registerForm:FormGroup=new FormGroup({
    fullName:new FormControl('',[Validators.required]),
    email:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required]),
    newpassword:new FormControl('',[Validators.required]),
  })
  registervalue:any;
onSignup(){
  this.registervalue=this.registerForm.value;

}
get fullName(){
  return this.registerForm.controls['fullName'];
}
get email(){
  return this.registerForm.controls['email'];
}
get password(){
  return this.registerForm.controls['password'];
}
get newpassword(){
  return this.registerForm.controls['newpassword'];
}
}
