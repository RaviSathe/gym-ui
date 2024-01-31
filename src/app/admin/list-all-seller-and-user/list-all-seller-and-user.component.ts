import { Component } from '@angular/core';
import { LoginRegistrationService } from 'src/app/appService/login-registration.service';
import { SellerService } from 'src/app/appService/seller.service';
import { FormControl } from '@angular/forms';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-list-all-seller-and-user',
  templateUrl: './list-all-seller-and-user.component.html',
  styleUrls: ['./list-all-seller-and-user.component.css']
})
export class ListAllSellerAndUserComponent {

  users:any =[]
  sellers:any =[]
  select:string =''
  userTable:boolean = true
  tableName:string = 'User Table'
  searchText='';
  fileName = 'GoFit_Users.xlsx'

  constructor(private userService:LoginRegistrationService, private sellerService:SellerService){}

  ngOnInit(){
    this.userService.getAllUsers().subscribe((res) => {
      this.users = res
      console.log(this.users);
    })

    this.sellerService.getAllSeller().subscribe((res)=>{
      this.sellers = res
      // console.log(this.sellers);
    })
  }

  deleteUser(i:any){
    if(confirm(`Delete User ${i}`)){
      this.userService.deleteUserById(i).subscribe((res)=>{
        console.log(" Deleted Successfully");
        this.refreshUserData()
      })
    }
  }

  deleteSeller(i:any){
    if(confirm(`Delete Seller ${i}`)){
      this.sellerService.deleteSellerById(i).subscribe((res)=>{
        console.log(" Deleted Successfully");
        this.refreshSellerData()
      })
    }
  }

  refreshUserData(){
    this.userService.getAllUsers().subscribe((res) => {
      this.users = res
    })
  }

  refreshSellerData(){
    this.sellerService.getAllSeller().subscribe((res)=>{
      this.sellers = res
    })
  }

  selectedDropdown(val:any){
    if(val.value === 'seller'){
      this.userTable = false
      this.tableName = 'Seller Table'
    }else{
      this.userTable = true
      this.tableName = 'User Table'
    }
  }

  exportToExcel(){
    if(this.userTable){
      this.fileName = 'GoFit_Users.xlsx'
    }else{
      this.fileName = 'GoFit_Sellers.xlsx'
    }
    //pass here table id
    let element = document.getElementById('excel-table');
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);

    //generate workbook and add the worksheet
    const wb: XLSX.WorkBook = XLSX.utils.book_new()
    XLSX.utils.book_append_sheet(wb , ws , 'Sheet1');

    //save to file
    XLSX.writeFile(wb , this.fileName)

  }

}
