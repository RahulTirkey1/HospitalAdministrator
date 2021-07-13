import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministratorModule } from './administrator/administrator.module';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './common/login/login.component';
import { MainComponent } from './common/main/main.component';
import { RegisterComponent } from './common/register/register.component';

const routes: Routes = [
  {path:'',component:MainComponent,children:[
    {path:'',component:LoginComponent},
      ]},
  {path:'register',component:RegisterComponent},
  {path:'administrator',loadChildren:()=>AdministratorModule,canActivate:[AuthGuard]},
  {path:"**",redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
