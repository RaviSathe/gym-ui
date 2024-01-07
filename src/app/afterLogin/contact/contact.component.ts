import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  get:any

  ngOnInit(){
    // console.log(this.arr);


    this.arr.filter((item)=>{
      // this.get = item.email
      if(item.category === 'gym' && item.use === 'store'){
        console.log(item);
      }
    })

  }

  arr = [
    {id:1 , name:'abc' , email:'abc@gmail.com' , category:'gym' , use:'store'},
    {id:2 , name:'kkk' , email:'kkk@gmail.com' , category:'protine' , use:'store'},
    {id:3 , name:'pqr' , email:'pqr@gmail.com' , category:'gym' , use:'list'},
    {id:4 , name:'iii' , email:'iii@gmail.com' , category:'helper' , use:'list'},
    {id:5 , name:'lll' , email:'lll@gmail.com' , category:'helper' , use:'list'},
    {id:6 , name:'ooo' , email:'ooo@gmail.com' , category:'gym' , use:'store'},
  ]


}
