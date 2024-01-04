import { TransferComponent } from './transfer/transfer.component';
import { TransactionComponent } from './transaction/transaction.component';
import { AccountComponent } from './account/account.component';
import { InvestmentComponent } from './investment/investment.component';
import { SettingsComponent } from './settings/settings.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingComponent } from './setting/setting.component';
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
  {
    path: 'setting',
    component: SettingComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'transfer',
    component: TransferComponent,
  },
  {
    path: 'transaction',
    component: TransactionComponent,
  },
  {
    path: 'account/cards',
    component: AccountComponent,
  },
  {
    path: 'investment',
    component: InvestmentComponent,
  },
];
// json-server --watch db.json
