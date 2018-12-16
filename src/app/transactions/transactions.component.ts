import {
  Component,
  EventEmitter,
  OnChanges,
  Output,
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

  @Input() transactions: Transaction[];

  // Send transaction submissions up and out to parent.
  @Output() transactionUpdatedEvent = new EventEmitter<Transaction>();

  transactionTableSource = new MatTableDataSource(this.transactions);
  transactionsColumns: string[] = [
    'id',
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

  onRowClick(rowData: any) {
    console.log('row click:', rowData);
    let updatedRow = rowData;
    updatedRow.details = rowData.details + '...updated!';

    this.transactionUpdatedEvent.emit(updatedRow);
  }

}
