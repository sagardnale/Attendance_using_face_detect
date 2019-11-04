import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Base64 } from '@ionic-native/base64/ngx';
import { RegisterfaceService } from '../services/registerface/registerface.service';
@Component({
  selector: 'app-registerface',
  templateUrl: './registerface.page.html',
  styleUrls: ['./registerface.page.scss'],
})
export class RegisterfacePage implements OnInit {
  third:string;
  str1:string;
  str2:string;
  picture:string;
  filePath:any;
  id:any;
  usertypeid:any;
  organisationid:any;
  confirmation:any;
  constructor(private camera:Camera,private base64: Base64,private srv:RegisterfaceService) {
    this.third='/assets/imgs/third.jpeg'
    this.str1='Get Ready To Setup Face Registration By'
    this.str2='Showing Your Face'
   
    this.organisationid=localStorage.getItem("organisationid");
    this.usertypeid=localStorage.getItem("usertypeid");
    this.id=localStorage.getItem("id");
      }

      StoreLeftSidePhoto(){
        console.log("I am in stored left side photo")

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
          this.filePath=this.picture;

          localStorage.setItem("leftsidephoto",this.picture);

          //when camera function take a photo then only call the service
          this.srv.storeleftsidephoto().subscribe(Response=>{this.confirmation=Response,console.log(Response)},error=>console.log(error));
       //alert("Done: " + this.picture);
       //alert("Done: "+this.picture);
        }, (err) => {
         // Handle error
         alert("error"+ err);
        });
        
      
        
      }

  ngOnInit() {
    //this.StoreLeftSidePhoto();
  }

  /*takePhoto(){
    let options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI ,
      cameraDirection: this.camera.Direction.FRONT,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    
    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64 (DATA_URL):
     this.picture = 'data:image/jpeg;base64,' + imageData;
      this.filePath=this.picture;
  
   alert("Done: " + imageData);
   //alert("Done: "+this.picture);
    }, (err) => {
     // Handle error
     alert("error"+ err);
    });
    
  
   }*/
  

}
