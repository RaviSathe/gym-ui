import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-flip',
  templateUrl: './flip.component.html',
  styleUrls: ['./flip.component.css']
})
export class FlipComponent {

  constructor(private router:Router){}

  ngOnInit(){
    if(localStorage.getItem('seller')){
      this.router.navigate(['dashboard'])
    }
  }

}
