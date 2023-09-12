import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.page.html',
  styleUrls: ['./cards.page.scss'],
})
export class CardsPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
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

}
