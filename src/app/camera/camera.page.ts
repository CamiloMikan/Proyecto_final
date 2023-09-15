import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.page.html',
  styleUrls: ['./camera.page.scss'],
})
export class CameraPage implements OnInit {

  imageSource: any; 
  photos: { title: string, image: string, captureDate: Date }[] = [];
  estadoToken: any;
  photoCount = 1;

  constructor(private router: Router) { }

  ngOnInit() {
    this.ValidacionToken();
  }

  
  takePicture = async () => {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Camera
    });
  
    this.imageSource = image.dataUrl;
  
    const captureDate = new Date();
    const title = `Foto ${this.photoCount}`;
    this.photoCount++;
    
    this.photos.push({ title: title, image: this.imageSource, captureDate: captureDate });
  }
  

  ValidacionToken() {
    this.estadoToken = localStorage.getItem('token');
    this.estadoToken = JSON.parse(this.estadoToken);

    if (this.estadoToken === false) {
      this.router.navigate(['./login']);
    }
  }

}
