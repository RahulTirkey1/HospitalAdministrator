import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  img="../../../assets/hospital.jpg";
  mobileDevice: boolean=false;
  constructor() { }

  ngOnInit(): void {
    this.getwidth();
  }

  getwidth(event?:any){
    this.mobileDevice = event ? event.target.innerWidth <= 900 ? true : false : window.innerWidth <= 900 ? true : false
  //  console.log("Hello");
  }

}
