import { HomeComponent } from './home/home.component';
import { VerifyOtpComponent } from './verify-otp/verify-otp.component';
import { LoginComponent } from './login/login.component';
import { Component } from '@angular/core';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'verify/otp',
    component: VerifyOtpComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
];
// json-server --watch db.json
