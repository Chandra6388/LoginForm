import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  signupObj: SignUp;

  constructor(private http: HttpClient) {
    this.signupObj = new SignUp();
  }

  OnSignUp() {
    console.log(this.signupObj);
    this.http.post("http://localhost:8080/signup", this.signupObj).subscribe((res: any) => {
      if (res.status) {
        alert("SignUp Successful");
      }
      else {
        alert("SignUp Failed");
      }
    })

  }

}

export class SignUp {
  FullName: string;
  Email: string;
  Password: string;
  constructor() {
    this.FullName = "";
    this.Email = "";
    this.Password = "";
  }
}

