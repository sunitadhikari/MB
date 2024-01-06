import { SettingComponent } from './../setting/setting.component';
import { InvestmentComponent } from './../investment/investment.component';
import { AccountComponent } from './../account/account.component';
import { TransactionComponent } from './../transaction/transaction.component';
import { TransferComponent } from './../transfer/transfer.component';
import { DashboardComponent } from './../dashboard/dashboard.component';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { Component, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatIconModule,
    NgIf,
    DashboardComponent,
    TransferComponent,
    TransactionComponent,
    AccountComponent,
    InvestmentComponent,
    SettingComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  constructor(private route: Router) {}
  selectSection: string | null = null;
  showSection(section: string) {
    this.selectSection = section;
  }
  logout() {
    this.route.navigate(['login']);
  }
  ngOnInit(): void {
    this.selectSection = 'settings';
  }
}
