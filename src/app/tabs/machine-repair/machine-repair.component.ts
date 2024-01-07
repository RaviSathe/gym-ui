import { Component } from '@angular/core';
import { SellerService } from 'src/app/appService/seller.service';

@Component({
  selector: 'app-machine-repair',
  templateUrl: './machine-repair.component.html',
  styleUrls: ['./machine-repair.component.css']
})
export class MachineRepairComponent {

  constructor(private _sellerSer:SellerService){
    this._sellerSer.getAllProduct().subscribe((res:any)=>{
      res.filter((item: any)=>{
        if(item.category === 'machine-repair'){
          this.repairMan.push(item)
        }
      })
    })
  }
  
  repairMan:any = [
    
  ]

}
