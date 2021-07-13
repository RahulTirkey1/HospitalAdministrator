import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NavigationEnd, Router } from '@angular/router';
import { CommonService } from 'src/app/service/common.service';
import * as states from '../../listStates.json';
const EMAIL_REGEX = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  mobDevice:boolean=false;
  listStates:any=states;
  userForm!: FormGroup;
  creation!: boolean;
  constructor(private fb:FormBuilder,private router:Router,private service:CommonService,private snackbar:MatSnackBar) {
    router.events.subscribe((event:any)=>{
      if(event instanceof NavigationEnd) {
        let url = event.urlAfterRedirects.split('/');
        let url_end = url[url.length - 1];
        this.creation=(url_end==='add')?true:false;
      }
    })
  }

  ngOnInit(): void {
    this.getWidth();
    if(this.creation){
      this.addUser()
    }
    else{
      this.updateUser()
    }
  }

  addUser(){
  //  console.log('Hello')
    this.userForm=this.fb.group({
      address1:['',[Validators.required,Validators.minLength(5),Validators.maxLength(50)]],
      address2:['',[Validators.minLength(5),Validators.maxLength(50)]],
      city:['',[Validators.required,Validators.minLength(3),Validators.maxLength(20)]],
      state:['',Validators.required],
      pincode:['',Validators.required,Validators.maxLength(6),Validators.minLength(6)],
      firstname:['',[Validators.required,Validators.maxLength(50)]],
      lastname:['',[Validators.required,Validators.maxLength(50)]],
      email:['',[Validators.required,Validators.pattern(EMAIL_REGEX),Validators.maxLength(50)]],
      phone:['',[Validators.required,Validators.maxLength(10)]],
      department:['',[Validators.required,Validators.minLength(5),Validators.maxLength(50)]],
      covid:['false',[Validators.required]]
    })
    
    this.userForm.get('covid')?.valueChanges.subscribe(data=>{
    //  console.log(this.userForm.get('covid')?.value)
      let department_name=(data=='true')?'Covid Ward':'';
    //  console.log(department_name,typeof data)
      this.userForm.get('department')?.setValue(department_name)

    })
    this.status=true;
  }
  status=false;checked!: boolean;
  updateUser(){
    this.service.particularPatient(localStorage.getItem('id')).subscribe((data:any)=>{
      if(data.message==='success'){
        let patientData=data.data;
      console.log(patientData)
    this.userForm=this.fb.group({
      address1:[patientData.address1,[Validators.required,Validators.minLength(5),Validators.maxLength(50)]],
      address2:[patientData.address2,[Validators.minLength(5),Validators.maxLength(50)]],
      city:[patientData.city,[Validators.required,Validators.minLength(3),Validators.maxLength(20)]],
      state:[patientData.state,Validators.required],
      pincode:[patientData.pincode,[Validators.required,Validators.maxLength(6),Validators.minLength(6)]],
      firstname:[patientData.firstname,[Validators.required,Validators.maxLength(50)]],
      lastname:[patientData.lastname,[Validators.required,Validators.maxLength(50)]],
      email:[patientData.email,[Validators.required,Validators.pattern(EMAIL_REGEX),Validators.maxLength(50)]],
      phone:[patientData.phone,[Validators.required,Validators.maxLength(10)]],
      department:[patientData.department,[Validators.required,Validators.minLength(5),Validators.maxLength(50)]],
      covid:[patientData.covid,[Validators.required]]
    
    })
    this.status=true;
    this.checked=(patientData.covid==true)?true:false;
 //   console.log(this.status)
    this.userForm.get('covid')?.valueChanges.subscribe(data=>{
      let department_name=(data=='true')?'Covid Ward':'';
      console.log(department_name,this.userForm.get('covid')?.value)
      this.userForm.get('department')?.setValue(department_name)
    
      })
      }
    },(err:any)=>{
      this.snackbar.open('Failed to Load Data, Try Again','',{duration:1500})
      this.router.navigate(['administrator'])
    })

  }

  getWidth(event?:any){
    this.mobDevice = event ? event.target.innerWidth <= 360 ? true : false : window.innerWidth <= 360 ? true : false
  }
  // Trimming Whitespace
  onChange(property?:AbstractControl|null){
    let val=property?.value.trim();
    property?.setValue(val);
  }

  navigate(){
    this.service.addPatient(this.userForm.value).subscribe((data:any)=>{
      if(data.message==='success'){
        // Patient Record Save
        this.snackbar.open('Record Added','',{duration:1500})
        this.router.navigate(['/administrator']);
        }
      },(err:any)=>{
        this.snackbar.open('Failed to Save, Try Again','',{duration:1500})
      })
  }

  update(){
    this.service.updatePatient(localStorage.getItem('id'),this.userForm.value).subscribe((data:any)=>{
    
    // Patient Record Updated
    if(data.message==='success'){
      this.snackbar.open('Updated','',{duration:1500})
      this.router.navigate(['/administrator']);
      }
    },(err:any)=>{
      this.snackbar.open('Failed to Update, Try Again','',{duration:1500})
    })
  }

  delete(){
    this.service.deletePatient(localStorage.getItem('id')).subscribe((data:any)=>{
  // Patient Record Deleted
  if(data.message==='success'){
    this.snackbar.open('Record Deleted','',{duration:1500})
      this.router.navigate(['/administrator']);
      }
    },(err:any)=>{
      this.snackbar.open('Failed to Delete, Try Again','',{duration:1500})
    })
  }

  exit(){
    this.router.navigate(['/administrator']);
  }

}
