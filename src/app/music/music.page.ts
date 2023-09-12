import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-music',
  templateUrl: './music.page.html',
  styleUrls: ['./music.page.scss'],
})
export class MusicPage implements OnInit {
  audio: any; // Variable para el elemento de audio
  listCanciones: any[] = []; // Lista de canciones desde el archivo JSON
  currentPlayingSong: any = null; // Canción actualmente en reproducción
  tpo:boolean=true;

  constructor(public http: HttpClient,private router: Router) { }

  ngOnInit() {
    // Cargar la lista de canciones desde el archivo JSON al inicializar la página
    this.http.get('assets/music/listaCanciones/musica.JSON').subscribe((data: any) => {
      if (data && data.length > 0 && data[0].music2) {
        this.listCanciones = data[0].music2;
      }
    });
  }

  playMusic(cancion: any) {
    
    if (cancion && cancion.music) {
      // Construir la ruta completa al archivo de audio
      const rutaCompleta = `assets/${cancion.music}`;
      
      // Detener la canción actual antes de reproducir una nueva
      if (this.currentPlayingSong) {
        this.currentPlayingSong.pause();
      }
  
      // Crear un nuevo elemento de audio, cargar y reproducir la nueva canción
      this.audio = new Audio(rutaCompleta);
      this.audio.load();
      this.audio.play();

      // Cambiar tpo solo cuando se inicia una canción
      cancion.tpo = false;
  
      // Asignar la canción actualmente en reproducción
      this.currentPlayingSong = this.audio;
    }
  }
  
  pauseMusic(cancion: any) {
    cancion.tpo = true;
    if (this.audio) {
      // Pausar la canción actualmente en reproducción
      this.audio.pause();
    }
  }

  back(){
    this.router.navigate(['./cards'])

    if (this.audio) {
      // Pausar la canción actualmente en reproducción
      this.audio.pause();
    }
  }
}
