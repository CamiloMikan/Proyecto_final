import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular'; // Importa NavController

@Component({
  selector: 'app-music',
  templateUrl: './music.page.html',
  styleUrls: ['./music.page.scss'],
})
export class MusicPage implements OnInit {
  audio: any;
  listCanciones: any[] = [];
  currentPlayingSong: any = null;
  tpo: boolean = true;
  estadoToken: any;

  constructor(public http: HttpClient, private router: Router, private navCtrl: NavController) { }

  ngOnInit() {
    this.http.get('assets/music/listaCanciones/musica.JSON').subscribe((data: any) => {
      if (data && data.length > 0 && data[0].music2) {
        this.listCanciones = data[0].music2;
      }
    });
    this.ValidacionToken();
  }

  playMusic(cancion: any) {
    if (cancion && cancion.music) {
      const rutaCompleta = `assets/${cancion.music}`;
      if (this.currentPlayingSong) {
        this.currentPlayingSong.pause();
      }
      this.audio = new Audio(rutaCompleta);
      this.audio.load();
      this.audio.play();
      
      cancion.tpo = false;
      this.currentPlayingSong = this.audio;
    }
  }

  pauseMusic(cancion: any) {
    cancion.tpo = true;
    if (this.audio) {
      this.audio.pause();
    }
  }

  ValidacionToken() {
    this.estadoToken = localStorage.getItem('token');
    this.estadoToken = JSON.parse(this.estadoToken);
    if (this.estadoToken === false) {
      this.router.navigate(['./login']);
    }
  }

  ionViewWillLeave() {
    if (this.audio && !this.audio.paused) {
      // Pausar la canción al salir de la página
      this.audio.pause();
    }
  }
}
