import { Component } from '@angular/core';

@Component({
  selector: 'app-gyms',
  templateUrl: './gyms.component.html',
  styleUrls: ['./gyms.component.css']
})
export class GymsComponent {


  gyms = [
    {image:'/assets/gym-imgs/2.jpg',
     name:'Hello GYM',
    },
    {image:'/assets/gym-imgs/3.jpg',
     name:'Hello GYM',
    },
    {image:'/assets/gym-imgs/6.jpg',
     name:'Hello GYM',
    },
    {image:'/assets/gym-imgs/9.jpg',
     name:'Hello GYM',
    },
    {image:'/assets/gym-imgs/10.jpg',
     name:'Hello GYM',
    },
   
  ]

}
