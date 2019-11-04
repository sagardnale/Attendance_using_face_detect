import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RightsidefaceService {
  baseUrlFrontsidephoto:any;
  organisationid:any;
  usertypeid:any;
  id:any;
  frontsidephoto:any;

  constructor(private http:HttpClient) { }

  storedfrontsidephoto(){
    this.organisationid=localStorage.getItem("organisationid");
    this.usertypeid=localStorage.getItem("usertypeid");
    this.id=localStorage.getItem("id");
    this.frontsidephoto=localStorage.getItem("frontsidephoto");
    this.baseUrlFrontsidephoto= 'http://192.168.43.221:8000'+'/savephoto/';+'/'+this.organisationid+'/'+this.usertypeid+'/'+this.id;
   
    console.log("I am service for stored the front side photo");
    return this.http.post(this.baseUrlFrontsidephoto,this.frontsidephoto);
  }
}

