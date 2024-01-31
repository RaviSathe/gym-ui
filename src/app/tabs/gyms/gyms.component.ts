import { AfterViewInit, Component } from '@angular/core';
import { SellerService } from 'src/app/appService/seller.service';

@Component({
  selector: 'app-gyms',
  templateUrl: './gyms.component.html',
  styleUrls: ['./gyms.component.css']
})
export class GymsComponent {
  gymStore:any
  searchResult:any
  gyms:any = [ ]
  filteredData:any=[]
  productInfo:boolean = false;

  constructor(private _sellerSer:SellerService){
    this._sellerSer.getAllProduct().subscribe((res:any)=>{
      res.filter((item: any)=>{
        if(item.category === 'gym' && item.useOfProduct === "list"){
          this.gyms.push(item)
        }
      })
    })
  }
  
  ngOnInit(){
  }

  selectedItem(i:any){
    this.filteredData =[]
    this.gyms.filter((res:any)=>{
      if(i === res.id)
      {
        this.filteredData.push(res)
        console.log(this.filteredData);
        this.productInfo = true
      }
    })
  }

  backToAllProducts(){
    this.filteredData=[]
    this.productInfo = false
  }



}
