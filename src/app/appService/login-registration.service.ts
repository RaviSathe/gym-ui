import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserModule } from 'src/app/model/user/user.module';

@Injectable({
  providedIn: 'root'
})
export class LoginRegistrationService {

  constructor(private http:HttpClient) {
    
   }

  
  private Url: string = 'http://localhost:9090';

  loginButton:boolean = false
  userLoggedIn:boolean = false;

  public addUser(user:any){
    return this.http.post(this.Url,user)
  }

  public findAll(): Observable<any> {
    return this.http.get<any>(this.Url);
  }

  public login(data:any){
    return this.http.post(this.Url,data)
  }

}
