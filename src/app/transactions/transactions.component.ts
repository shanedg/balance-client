import {
  Component,
  OnChanges,
  Input,
  SimpleChanges
} from '@angular/core';
import { MatTableDataSource } from '@angular/material';

import { Transaction } from '../transaction';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnChanges {

  @Input() transactions:Transaction[];
  transactionTableSource = new MatTableDataSource(this.transactions);
  transactionsColumns: string[] = [
    // 'id',
    'name',
    'amount',
    'details',
    'due',
    'scheduled',
    'effective',
    'fromAccount',
    'toAccount',
    'bucket',
  ];

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    this.transactionTableSource.data = this.transactions;
  }

}
