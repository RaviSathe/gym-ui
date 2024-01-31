import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Email } from '../model/email/email.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }

  // public sendEmailtoSpecificMembers(emails:Email[]):Observable<any>{
  //   return this.http.post(`http://localhost:9090/admin/sendNotice/${emails}`);
  // }

  public sendEmailtoSpecificMembers(emails:any[]) {
    return this.http.post(`http://localhost:9090/admin/sendNotice`, emails);
  }
}
