import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree,Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CommonService } from './service/common.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private service:CommonService,private router:Router){}
  canActivate():boolean{
  
    if(this.service.isLogin()==='yes'){
      return true;
    }
    else{
      this.router.navigate(['/']);
      return false;
    }
  }
  
  
}
