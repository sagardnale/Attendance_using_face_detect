import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
@Component({
  selector: 'app-verifyface',
  templateUrl: './verifyface.page.html',
  styleUrls: ['./verifyface.page.scss'],
})
export class VerifyfacePage implements OnInit {
  picture:string;
  confirmation:any;
  constructor(private camera:Camera) { }

  ngOnInit() {
  }

/*  Verifyimage(){
    console.log("I am in verify photo");
    let options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL ,
      cameraDirection: this.camera.Direction.FRONT,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.CAMERA,
    }
    
    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64 (DATA_URL):
     this.picture = 'data:image/jpeg;base64,' + imageData;
      
     localStorage.setItem("verifyphoto",this.picture);

     this.srv.verifyphoto.subscribe(Response=>{this.confirmation=Response,console.log(Response)},error=>console.log(error));
   //alert("Done: " + this.picture);
    }, (err) => {
     // Handle error
     alert("error"+ err);
    });
    
  }*/

  takePhoto(){
    let options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL ,
      cameraDirection: this.camera.Direction.FRONT,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.CAMERA,
    }
    
    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64 (DATA_URL):
     this.picture = 'data:image/jpeg;base64,' + imageData;
   //alert("Done: " + this.picture);
    }, (err) => {
     // Handle error
     alert("error"+ err);
    });
   }
 
}
