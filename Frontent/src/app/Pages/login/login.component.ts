import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginObj: Login;


  constructor(private http: HttpClient) {
    this.loginObj = new Login();

  }

  OnLogin() {
    console.log(this.loginObj);
    this.http.post("localhost:8080/login", this.loginObj).subscribe((res: any) => {
      if (res.status == 200) {
        alert("Login Successful");
      }
      else {
        alert("Login Failed");
      }

    })
  }
}

export class Login {
  Email: string;
  Password: string;
  constructor() {
    this.Email = "";
    this.Password = "";
  }
}
