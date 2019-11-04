import { Component, OnInit } from '@angular/core';
import { FinalizesetupService } from '../services/finalizesetup/finalizesetup.service';
@Component({
  selector: 'app-finalizesetup',
  templateUrl: './finalizesetup.page.html',
  styleUrls: ['./finalizesetup.page.scss'],
})
export class FinalizesetupPage implements OnInit {
username:any;
  constructor(private srv:FinalizesetupService) { }

  UserName(){
    console.log("Im in the username")
      //this.srv.getUsername().subscribe(Response=>{this.username=Response,console.log(Response)},error=>console.log(error));
    this.srv.getUsername().subscribe(Response=>{this.username=Response,console.log(Response)},error=>console.log(error));
    }
  ngOnInit() {
    this.UserName();
  }

}
