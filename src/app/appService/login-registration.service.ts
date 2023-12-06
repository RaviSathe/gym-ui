import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginRegistrationService {

  constructor(private http:HttpClient) { }

  private Url: string = 'http://localhost:9090';

  public addUser(user:any){
    return this.http.post(this.Url,user)
  }

  public findAll(): Observable<any> {
    return this.http.get<any>(this.Url);
  }

}
