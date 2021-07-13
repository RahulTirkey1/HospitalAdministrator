import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  private base_url='http://localhost:8000/api';
  

  constructor(private http:HttpClient) { }

  register(data:any){
    return this.http.post(`${this.base_url}/admin`,data);
  }

  login(data:any){
    return this.http.post(`${this.base_url}/admin/login`,data);
  }

  addPatient(data:any){
    return this.http.post(`${this.base_url}/patient`,data);
  }

  allPatient(){
    return this.http.get(`${this.base_url}/patient`);
  }

  particularPatient(data:any){
    return this.http.get(`${this.base_url}/patient/${data}`);
  }

  updatePatient(id:any,data:any){
    return this.http.put(`${this.base_url}/patient/${id}`,data);
  }

  deletePatient(id:any){
    return this.http.delete(`${this.base_url}/patient/${id}`);
  }

  isLogin(){
    let login=localStorage.getItem('isLogin');
    return login;
  }

}
