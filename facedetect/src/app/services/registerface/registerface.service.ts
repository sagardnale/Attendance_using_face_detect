import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterfaceService {

  organisationid:any;
  usertypeid:any;
  id:any;
  baseUrlleftsidephoto:any;
  leftsidephoto:any;
  constructor(private http : HttpClient) {}

storeleftsidephoto():Observable<any>{
  this.organisationid=localStorage.getItem("organisationid");
  this.usertypeid=localStorage.getItem("usertypeid");
  this.id=localStorage.getItem("id");
  this.leftsidephoto=localStorage.getItem("leftsidephoto");
  this.baseUrlleftsidephoto= 'http://192.168.43.221:8000'+'/savephoto/'+this.organisationid+'/'+this.usertypeid+'/'+this.id;
  console.log("I am service for stored the left side photo");
  return this.http.post(this.baseUrlleftsidephoto,this.leftsidephoto);

}
}
