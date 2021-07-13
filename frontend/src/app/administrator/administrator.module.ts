import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { AdministratorRoutingModule } from './administrator-routing.module';
import { MaterialModule } from '../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AddComponent } from './add/add.component';
import { HttpClientModule } from '@angular/common/http';
import { RecordsComponent } from './records/records.component';




@NgModule({
  declarations: [
    MainComponent,
    AddComponent,
    RecordsComponent,
    
  ],
  imports: [
    CommonModule,
    AdministratorRoutingModule,
    MaterialModule,
    FlexLayoutModule,HttpClientModule
  ]
})
export class AdministratorModule { }
