import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './add/add.component';
import { MainComponent } from './main/main.component';
import { RecordsComponent } from './records/records.component';

const routes: Routes = [
  {path:'',component:MainComponent,children:[
    {path:'',component:RecordsComponent},
    {path:'add',component:AddComponent},
    {path:'update',component:AddComponent}
    
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministratorRoutingModule { }
