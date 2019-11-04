import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { forkJoin } from 'rxjs';


@Injectable({
  providedIn: 'root',
 
})
export class SignupService {

orgid:any;
usertypeid:any;

baseUrlorgnisationlist:any;
baseUrlusertypelist:any;
baseUrlidlist :any; 



  constructor(private http: HttpClient) {
    
    this.baseUrlorgnisationlist='http://192.168.43.221:8000'+'/organization-list/';

    this.orgid=localStorage.getItem("organisationid");
    this.baseUrlusertypelist='http://192.168.43.221:8000'+'/getusertype/'+this.orgid;
    
    this.usertypeid=localStorage.getItem("usertypeid");
    this.baseUrlidlist='http://192.168.43.221:8000'+'/getuserlist/'+this.orgid+"/"+this.usertypeid;
   }
  
  Getorganisation():Observable<any>{
    console.log("In get organisation list service");
    return this.http.get(this.baseUrlorgnisationlist);
  }

  Getusertype():Observable<any> {
    
    console.log("In get usertypelist  with organisation name service");
    return this.http.get(this.baseUrlusertypelist);

  }

  Getidlist():Observable<any>{
    console.log("In get id list with organisation name and user type servie");
    return this.http.get(this.baseUrlidlist);
  }
}