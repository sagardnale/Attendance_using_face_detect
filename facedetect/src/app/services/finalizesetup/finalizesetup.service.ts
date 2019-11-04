import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class FinalizesetupService {
  organisationid:any;
  usertypeid:any;
  id:any;
  pin:any;

  baseUrlusername:any;
  
  constructor(private http:HttpClient) { }

  getUsername(){
    this.organisationid=localStorage.getItem("organisationid");
    this.usertypeid=localStorage.getItem("usertypeid");
    this.id=localStorage.getItem("id");
    this.baseUrlusername='http://192.168.43.221:8000'+'/username/'+'/'+this.organisationid+'/'+this.usertypeid+'/'+this.id;
    console.log("Im in service of the get username for finalize setup");  
    return this.http.get(this.baseUrlusername);
  }
  
}
