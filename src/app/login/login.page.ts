import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string = '';
  password: string = '';

  token = false;

  constructor(private router: Router) {}
  ngOnInit() {
    localStorage.setItem('token',JSON.stringify(this.token));
  }


  login() {

    if (this.email == '123' && this.password == '123') {
      this.router.navigate(['/cards']);
      this.token = true;
      console.log(this.token)
      localStorage.setItem('token',JSON.stringify(this.token));
    } else {
      console.log('Usuario y contraseña incorrectos');
    }
  }
}