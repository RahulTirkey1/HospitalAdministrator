import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/service/common.service';
import * as states from '../../listStates.json';
const EMAIL_REGEX = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
const PWD_REGEX=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  userForm!: FormGroup;
  listStates:any=states;
  img="../../../assets/hospital.jpg";
  mobileDevice: boolean=false;
  err:boolean=false;
  constructor(private fb:FormBuilder,private service:CommonService,private snackbar:MatSnackBar,private router:Router) { }

  ngOnInit(): void {
    this.getwidth();
    this.userForm=this.fb.group({
      firstname:['',[Validators.required,Validators.maxLength(50)]],
      lastname:['',[Validators.required,Validators.maxLength(50)]],
      email:['',[Validators.required,Validators.pattern(EMAIL_REGEX),Validators.maxLength(50)]],
      phone:['',[Validators.required,Validators.maxLength(10)]],
      password:['',[Validators.required,Validators.pattern(PWD_REGEX),Validators.maxLength(15),Validators.minLength(8)]],
      confirm_password:['',[Validators.required]]
    })
    this.userForm.get('confirm_password')?.valueChanges.subscribe((data:any)=>{
      this.err=(data!==this.userForm.get('password')?.value)?true:false;
    //  console.log(data,this.userForm.get('password')?.value)
    })
  }

  getwidth(event?:any){
    this.mobileDevice = event ? event.target.innerWidth <= 900 ? true : false : window.innerWidth <= 900 ? true : false;
  //  console.log("Hello");
  }

  onChange(property?:AbstractControl|null){
    let val=property?.value.trim();
    property?.setValue(val);
  }

  navigate(){

    let obj={...this.userForm.value};
    delete obj['confirm_password'];
  //  console.log(obj);
    this.service.login(obj).subscribe((data:any)=>{
      if(data.message==='success'){
        this.snackbar.open('Admin Registered Successfully','',{duration:1500});
        this.router.navigate(['/login']);
      }
  //    console.log(data);
    },(err:any)=>{
      this.snackbar.open('Please Try Again','',{duration:1500});
    })
  }

}
