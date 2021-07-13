import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './common/register/register.component';
import { LoginComponent } from './common/login/login.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { HttpClientModule } from '@angular/common/http';
import { MainComponent } from './common/main/main.component';
import { CommonService } from './service/common.service';
import { AuthGuard } from './auth.guard';
import { NumberDirective } from './numbersOnly';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    MainComponent,
    NumberDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule,
    ReactiveFormsModule,LazyLoadImageModule,HttpClientModule
  ],
  providers: [CommonService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
