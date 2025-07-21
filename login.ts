import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';


@Component({
  selector: 'app-login',
  imports: [FormsModule,RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  Userobj:any={
    emailid:"",
    password:"",
  }

  router=inject(Router)

    onLogin(){
    if(this.Userobj.emailid=="shweta123@gmail.com" && this.Userobj.password=="12345")
    {
      alert("Successfully Logged In");
      localStorage.setItem("logemail",this.Userobj.emailid)
      this.router.navigateByUrl('home')
    }
    else{
      alert("Invalid Emailid or Password")
    }
  }
}
