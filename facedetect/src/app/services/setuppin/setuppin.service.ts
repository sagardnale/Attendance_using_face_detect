import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SetuppinService {
  organisationid:any;
  usertypeid:any;
  id:any;
  pin:any;
  baseUrlPin:any;

  
  constructor(private http: HttpClient) { }


  storepin(){
    this.organisationid=localStorage.getItem("organisationid");
    this.usertypeid=localStorage.getItem("usertypeid");
    this.id=localStorage.getItem("id");
    this.pin=localStorage.getItem("pin");
    
   this.baseUrlPin='http://192.168.43.221:8000'+'/setpin/'+'/'+this.organisationid+'/'+this.usertypeid+'/'+this.id+'/'+this.pin;
    console.log("Im in pin stored service");
    return this.http.post(this.baseUrlPin,this.pin);
  }
}
