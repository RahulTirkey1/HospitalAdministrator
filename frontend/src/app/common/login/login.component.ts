import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/service/common.service';
const EMAIL_REGEX = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
const PWD_REGEX=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  mobileDevice: boolean=false;
  loginForm:FormGroup;
  img="../../../assets/hospital.jpg"
  constructor(private fb:FormBuilder,private snackBar:MatSnackBar,private service:CommonService,private router:Router) {
    this.loginForm=this.fb.group({})
  }

  ngOnInit(): void {
    this.getwidth();
    this.loginForm=this.fb.group({
      email:['',[Validators.required,Validators.pattern(EMAIL_REGEX),Validators.maxLength(50),Validators.minLength(6)]],
      password:new FormControl('',[Validators.required]),
    })
  }

  get email(){
    return this.loginForm.get('email')
  }

  get password(){
    return this.loginForm.get('password')
  }


  getwidth(event?:any){
    this.mobileDevice = event ? event.target.innerWidth <= 900 ? true : false : window.innerWidth <= 900 ? true : false
  //  console.log("Hello");
  }

  nextPage(){
    this.service.login(this.loginForm.value).subscribe((data:any)=>{
    //  console.log(data)
    if(data.message==='success'){
      this.router.navigate(['/administrator'])
      localStorage.setItem('isLogin','yes');
      }
    },(err:any)=>{
      this.snackBar.open(err.error.message,'',{duration:1500});
    })
  }

  register(){
    this.router.navigate(['/register'])
  }
  

}
