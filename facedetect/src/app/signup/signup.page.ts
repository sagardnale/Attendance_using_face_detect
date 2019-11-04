import { Component, OnInit } from '@angular/core';
import { SignupService } from '../services/signup/signup.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  second:string;
  organisationname:any;
  usertype:any;
  orgnames:any;
  id:any;
  changeorgid:any;
  changeusertypeid:any;
  changeid:any;
  organisations:any[];
  usertypes:any[];
  ids:any[];
   /*organisations: any[] = [
     {organisation_id: 1,organisation_name: 'Computer Science',},
     {organisation_id: 2,organisation_name: 'Chemistry',},
     {organisation_id: 3,organisation_name: 'Mathematics',}
   ];

   usertypes: any[] = [
     {user_type_id:101,user_type: 'Teacher',},
     {user_type_id:102, user_type: 'Student',},
     {user_type_id:103,user_type: 'Other Staff',},

   ];

   ids: any[] = [
     {id:111},
     {id:112},
     {id:113},

   ];*/

  constructor(private srv:SignupService) { 
    this.second= '/assets/imgs/second.jpeg';
      
  }
  
  data(){
    alert("Orgnisation:"+this.organisationname+"\nUsertype:"+this.usertype+"\nId:"+this.id);
  }

GetOrgname(){
  for (var i=0;i<this.organisations.length;i++)
  {
    if (this.organisations[i].organisation_name == this.organisationname)
    {
      
      this.changeorgid=this.organisations[i].organisation_id
      console.log(this.changeorgid)
    }
  }
 localStorage.setItem("organisationid",this.changeorgid);

 this.getUsertypelist();
}


GetUsertype(){
  for (var i=0;i<this.usertypes.length;i++)
  {
    if(this.usertypes[i].user_type== this.usertype)
    {
      this.changeusertypeid=this.usertypes[i].user_type_id;
      console.log(this.changeusertypeid);
    }
  }
  localStorage.setItem("usertypeid",this.changeusertypeid);

  this.getIdlist();
}

GetId(){
   localStorage.setItem("id",this.id);
   console.log(this.id);
  
}

  getOrgnisationlist(){
    console.log("i am in get orgnisation list");
    this.srv.Getorganisation().subscribe(Response=>{this.organisations=Response,console.log(Response)},error=>console.log(error));
    
  }
  
  getUsertypelist(){
    console.log("i am in get user type list");
    this.srv.Getusertype().subscribe(Response=>{this.usertypes=Response,console.log(Response)},error=>console.log(error));
    
  }
  
  getIdlist(){
    console.log("i am in get id list");
    this.srv.Getidlist().subscribe(Response=>{this.ids=Response,console.log(Response)},error=>console.log(error));
    
  }
  ngOnInit() { 
    this.getOrgnisationlist();
   
  }
  
}
