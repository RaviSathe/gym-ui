import { Component } from '@angular/core';
import * as CryptoJS from 'crypto-js'


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  decryptedUser: any;

  ngOnInit(){
    this.decryptData()
  }

  decryptData(){
    if(localStorage.getItem('user')){
      const eText = localStorage.getItem('user') || '';
      const decryptedWord = CryptoJS.AES.decrypt(eText , 'data_key')
      this.decryptedUser = JSON.parse(decryptedWord.toString(CryptoJS.enc.Utf8))
    }
  }

  enquiryForm(){

  }

}
