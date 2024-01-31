import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AdminService } from 'src/app/appService/admin.service';
import { LoginRegistrationService } from 'src/app/appService/login-registration.service';
import { SellerService } from 'src/app/appService/seller.service';
import { Email } from 'src/app/model/email/email.model';

@Component({
  selector: 'app-notice',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.css']
})
export class NoticeComponent {

  emails:Email[] = [{email:'', subject:'', body:''}]
  test:any[] =[]
  isChecked:boolean = false


  constructor(private _adminSer:AdminService, private user:LoginRegistrationService,private seller:SellerService){}

  ngOnInit(){
    console.log(this.emails);
    
  }


  addEmail() {
    this.emails.push({ email: '', subject: '', body: '' });
  }

  removeEmail(index: number) {
    this.emails.splice(index, 1);
  }

  sendEmails(sub:any,body:any) {
    if(this.isChecked === true){
      this.test=[]
      this.user.getAllUsers().subscribe((res)=>{
        res.filter((el:any)=>{
            this.test.push({email:el.email,subject:sub.value,body:sub.value})     
        })
        this._adminSer.sendEmailtoSpecificMembers(this.test).subscribe((res)=>{
            console.log(res);
          })
      })
        // console.log(this.test);
    }else{
    console.log(this.emails);
    this._adminSer.sendEmailtoSpecificMembers(this.emails).subscribe((res)=>{
      console.log(res);
      
    })
    }
  }

  allEmails(sub:any,body:any){
    this.user.getAllUsers().subscribe((res)=>{
      res.filter((el:any)=>{
        for (let i = 0; i < this.emails.length; i++) {
          this.test.push({email:el.email,subject:sub.value,body:sub.value})     
        }
      })
    })
    console.log(this.test);
  }

  checkboxChecked(){
    if(this.isChecked === true){
      this.emails=[]
    }else{
      this.emails= [{email:'', subject:'', body:''}]
    }
  }

}
