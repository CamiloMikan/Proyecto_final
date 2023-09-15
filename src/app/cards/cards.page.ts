import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.page.html',
  styleUrls: ['./cards.page.scss'],
})
export class CardsPage implements OnInit {

  estadoToken: any;

  constructor(private router:Router) { }

  ngOnInit() {
    this.ValidacionToken();
  }

  navigateToRegister() {
    this.router.navigate(['/register']);
  }

  navigateToCamera() {
    this.router.navigate(['/camera']);
  }

  navigateToMusic() {
    this.router.navigate(['/music']);
  }

  navigateToApi() {
    this.router.navigate(['/list-api']);
  }

  ValidacionToken() {
    this.estadoToken = localStorage.getItem('token');
    this.estadoToken = JSON.parse(this.estadoToken);

    if (this.estadoToken === false) {
      this.router.navigate(['./login']);
    }
  }

}
