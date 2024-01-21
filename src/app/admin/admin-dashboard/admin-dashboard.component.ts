import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent {

  menu(){
    const menuicn: HTMLElement | null = document.querySelector(".menuicn");
const nav: HTMLElement | null = document.querySelector(".navcontainer");

if (menuicn && nav) {
    menuicn.addEventListener("click", () => {
        nav.classList.toggle("navclose");
    });
}
  }

}
