import { Component } from '@angular/core';
import * as CryptoJS from 'crypto-js'


@Component({
  selector: 'app-seller-dash-board',
  templateUrl: './seller-dash-board.component.html',
  styleUrls: ['./seller-dash-board.component.css']
})
export class SellerDashBoardComponent {
 decryptedUser: any;

 constructor(){}

 ngOnInit(){
  this.decryptData()
 }


 decryptData(){
    if(localStorage.getItem('seller')){
      const eText = localStorage.getItem('seller') || '';
      const decryptedWord = CryptoJS.AES.decrypt(eText , 'data_key')
      this.decryptedUser = JSON.parse(decryptedWord.toString(CryptoJS.enc.Utf8))
      // console.log(this.decryptedUser);
    }
  }

}
