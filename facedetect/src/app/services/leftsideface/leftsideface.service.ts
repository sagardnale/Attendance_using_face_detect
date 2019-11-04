import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LeftsidefaceService {

  baseUrlRightsidephoto:any; 
  organisationid:any;
  usertypeid:any;
  id:any;
  rightsidephoto:any;
  constructor( private http:HttpClient ) {

   }
storedrightsidephoto(){
  this.organisationid=localStorage.getItem("organisationid");
  this.usertypeid=localStorage.getItem("usertypeid");
  this.id=localStorage.getItem("id");
  this.rightsidephoto=localStorage.getItem("rightsidephoto");

  this.baseUrlRightsidephoto='http://192.168.43.221:8000'+'/savephoto/'+this.organisationid+'/'+this.usertypeid+'/'+this.id;
  console.log("I am service for stored the right side photo");
  return this.http.post(this.baseUrlRightsidephoto,this.rightsidephoto);
}
}
