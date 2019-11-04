import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-frontsideface',
  templateUrl: './frontsideface.page.html',
  styleUrls: ['./frontsideface.page.scss'],
})
export class FrontsidefacePage implements OnInit {
  frontface:string;
  str1:string;
  str2:string;

  picture:string;
  constructor(private camera:Camera) {
    this.frontface='/assets/imgs/frontface.jpeg';
    this.str1='Please show your Front side of the face to the';
    this.str2='camera frame';
   
   }

  ngOnInit() {
  }

  takePhoto(){
    let options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI ,
      cameraDirection: this.camera.Direction.FRONT,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.CAMERA,
    }
    
    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64 (DATA_URL):
     this.picture = 'data:image/jpeg;base64,' + imageData;
   alert("Done: " + imageData);
    }, (err) => {
     // Handle error
     alert("error"+ err);
    });
   }
 
}
