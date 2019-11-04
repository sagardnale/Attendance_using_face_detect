import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { RightsidefaceService } from '../services/rightsideface/rightsideface.service';
@Component({
  selector: 'app-rightsideface',
  templateUrl: './rightsideface.page.html',
  styleUrls: ['./rightsideface.page.scss'],
})
export class RightsidefacePage implements OnInit {
  rightface:string;
  str1:string;
  str2:string;
  picture:string;
  confirmation_front_photo:any
  constructor(private camera:Camera ,private srv:RightsidefaceService) { 
    this.rightface='/assets/imgs/rightface.jpeg';
    this.str1='Please show your Right side of the face to the';
    this.str2='camera frame';

  }

StoredFrontSidePhoto(){
  console.log("Im in stored front side face")

  //starting of the code for the camera function
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

   localStorage.setItem("frontsidephoto",this.picture);
//when camera function take a photo then only call the service
   this.srv.storedfrontsidephoto().subscribe(Response=>{this.confirmation_front_photo=Response,console.log(Response)},error=>console.log(error));

 //alert("Done: " + this.picture);
  }, (err) => {
   // Handle error
   alert("error"+ err);
  });
    
}

  ngOnInit() {
  }

  /*takePhoto(){
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
   }*/
 

}
