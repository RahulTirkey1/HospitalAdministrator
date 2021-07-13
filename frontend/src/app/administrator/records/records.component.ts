import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/service/common.service';

@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.scss']
})
export class RecordsComponent implements OnInit {
  displayedColumns: string[] = ['name', 'covid', 'state','link'];
  patientList:any=[];
  dataSource = new MatTableDataSource();

  constructor(private service:CommonService,private router:Router,private snackbar:MatSnackBar) { }

  ngOnInit(): void {
    this.getWidth();
    
    this.service.allPatient().subscribe((data:any)=>{
  //  console.log(data)
  if(data.message==='success'){
    data.data.forEach((el:any) => {
      let obj={
        name:el.firstname+" "+el.lastname,covid:(el.covid==true)?'Positive':'Negative',state:el.state,link:el['_id']
          }
          this.patientList.push(obj);
      });
      this.dataSource=new MatTableDataSource(this.patientList);
    }
    },(err:any)=>{
      this.snackbar.open('Failed to fetch, Refresh Again','',{duration:1500})
    }); 
  
  }

  getWidth(event?:any){

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  update(data:any){
  //  console.log(data)
    localStorage.setItem('id',data);
    this.router.navigate(['administrator/update']);
  }

  addPatient(){
    this.router.navigate(['administrator/add']);
  }

}
