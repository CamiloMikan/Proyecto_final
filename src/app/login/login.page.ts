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

  mensaje: string = '';
  mensajeError: string = '';

  token = false;

  constructor(private router: Router) { }

  ngOnInit() {
    localStorage.setItem('token', JSON.stringify(this.token));
  }

  login() {
    const storedUserData = localStorage.getItem(this.email);

    if (storedUserData) {
      const userData = JSON.parse(storedUserData);
      const storedUserName = userData[0];
      const storedPassword = userData[1];

      if (this.email === storedUserName && this.password === storedPassword) {
        this.router.navigate(['/cards']);
        this.token = true;
        localStorage.setItem('token', JSON.stringify(this.token));
      } else {
        this.mensaje = 'Error, el nombre de usuario o contraseña son incorrectos';
      }
    } else {
      this.mensajeError = 'Usuario no encontrado' ;
    }
  }

  navigateToRegister() {
    this.router.navigate(['/register']);
  }
}
