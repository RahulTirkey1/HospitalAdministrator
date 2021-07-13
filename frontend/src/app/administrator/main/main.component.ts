import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/service/common.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  mobileDevice:boolean=false;

menuOpen:boolean=false;
panelOpenState = false;
show:boolean=true;
  show1:boolean=true;

  constructor(private dialog: MatDialog,private router:Router) { }

  ngOnInit(): void {
    this.getwidth();
  }
  getwidth(event?:any){
    this.mobileDevice = event ? event.target.innerWidth <= 1000 ? true : false : window.innerWidth <= 1000 ? true : false
    this.slowView()
  }

  menuClosed(){
    this.menuOpen=false;
  }
  mobView(){
    if(!this.mobileDevice){
    this.show1=(this.show1)?false:true;
    }
  }

  slowView(){
    if(!this.mobileDevice){
      this.show1=true;
    }else{
      this.show1=false;
    }
  }

  logout(){
    this.router.navigate(['/'])
    localStorage.setItem('isLogin','no');
  }


}
