import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  baseURLcheckin:any;
  checkinphoto:any;
  constructor(private http:HttpClient) { }
  storeleftsidephoto():Observable<any>{
    this.checkinphoto=localStorage.getItem("checkinphoto");
    this.baseURLcheckin= 'http://192.168.43.221:8000'+'/faceverify';
    console.log("I am service for check in ");
    return this.http.post(this.baseURLcheckin,this.checkinphoto);
  
  }
  
}
