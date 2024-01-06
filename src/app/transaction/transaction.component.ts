import { MatIconModule } from '@angular/material/icon';
import { Component } from '@angular/core';

@Component({
  selector: 'app-transaction',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './transaction.component.html',
  styleUrl: './transaction.component.css',
})
export class TransactionComponent {}
