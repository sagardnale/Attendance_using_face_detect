import { Component } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { SignupService } from '../services/signup/signup.service';
import { HomeService } from '../services/home/home.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  logo: string;
  faceimg: string;
  str1: string;
  str2: string;
  str3: string;
  button1:string;
  button2:string;
  picture:string;
  confirmation:any;
  ip:string;
  
  constructor(private camera:Camera,private srv:SignupService,private checkinsrv:HomeService) {

    this.logo = '/assets/imgs/pucsd_slogo.png';
    this.faceimg= '/assets/imgs/frist.jpeg';

    this.str1= 'Welcome to Computer Science ';
    this.str2= 'Check in';
    this.str3= 'Powered by SPPU'

    this.button1='Register'
    this.button2='Check-In'
    
    //this.ip='192.168.43.221:8000';
    //localStorage.setItem('ipaddress',this.ip);
  }
  
  CheckinImage(){
    console.log("I am in stored check in image")

        //from here the code for the camera function
        let options: CameraOptions = {
          quality: 100,
          destinationType: this.camera.DestinationType.DATA_URL,
          cameraDirection: this.camera.Direction.FRONT,
          encodingType: this.camera.EncodingType.JPEG,
          mediaType: this.camera.MediaType.PICTURE
        }
        
        this.camera.getPicture(options).then((imageData) => {
         // imageData is either a base64 encoded string or a file URI
         // If it's base64 (DATA_URL):
         this.picture = 'data:image/jpeg;base64,' + imageData;
         // this.filePath=this.picture;

          localStorage.setItem("checkinphoto",this.picture);

          //when camera function take a photo then only call the service
          this.checkinsrv.baseURLcheckin().subscribe(Response=>{this.confirmation=Response,console.log(Response)},error=>console.log(error));
       //alert("Done: " + this.picture);
       //alert("Done: "+this.picture);
        }, (err) => {
         // Handle error
         alert("error"+ err);
        });
        
      
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
