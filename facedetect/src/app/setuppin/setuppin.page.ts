import { Component, OnInit } from '@angular/core';
import { SetuppinService } from '../services/setuppin/setuppin.service';
@Component({
  selector: 'app-setuppin',
  templateUrl: './setuppin.page.html',
  styleUrls: ['./setuppin.page.scss'],
})
export class SetuppinPage implements OnInit {
  setpin:string;
  str1:string;
  str2:string;
  star:string;
  takepin1:any;
  takepin2:any;

  username:any;

  confirmation_pin:any;

  constructor(private srv:SetuppinService) {
  this.setpin='/assets/imgs/setpin.jpeg';
  this.str1='Please Setup a Secured Pin With';
  this.str2='Minimum 4 digit';
  this.star='*';
  }     

  ngOnInit() {
  }

  ValidatePin(){
    
    if(this.takepin1!=this.takepin2)
    {
      alert("Bad");
    }
    else{ 
      if (/^\d{4}$/.test(this.takepin1) && /^\d{4}$/.test(this.takepin2)) {
        alert("welcome");
        localStorage.setItem("pin",this.takepin1);
      console.log("Im in the store pin");
      this.srv.storepin().subscribe(Response=>{this.confirmation_pin=Response,console.log(Response)},error=>console.log(error));

      
    } else {
        alert("Pin only contain digts..");
}
      
    }

    
  }
}
