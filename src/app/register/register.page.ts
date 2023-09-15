import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  userName: string = '';
  password: string = '';
  repeatPassword: string = '';
  mensaje: string = '';
  mensajeError: string = '';
  data: any = [];
  usuario: any = [];

  constructor(private router: Router) {}

  ngOnInit() {}

  validarCampos() {
    this.usuario = localStorage.getItem(this.userName);

    if (this.usuario == null) {
      if (
        this.userName == '' ||
        this.userName == null ||
        this.userName == undefined ||
        this.password == '' ||
        this.password == null ||
        this.password == undefined ||
        this.repeatPassword == '' ||
        this.repeatPassword == null ||
        this.repeatPassword == undefined
      ) {
        this.mensajeError = 'No puedes dejar campos vacíos';
      } else {
        if (this.password == this.repeatPassword) {
          this.data[0] = this.userName;
          this.data[1] = this.password;
          localStorage.setItem(this.userName, JSON.stringify(this.data));
          this.router.navigate(['/login']);
        } else {
          this.mensaje = 'Error, las contraseñas no son iguales';
        }
      }
    }
  }

  navigateToLogin() {
    this.router.navigate(['/login']);
  }
}
